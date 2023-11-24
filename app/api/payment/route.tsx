import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import stripe from "@/stripe/stripeConfig";

export async function POST(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const data = await req.json();

  const lineItems = data.cartItems.map((item) => {
    const img = item.image[0].asset._ref;
    const newImage = img
      .replace("image-", "https://cdn.sanity.io/images/m9c5ybdd/production")
      .replace("-webp", ".webp");
    return {
      price_data: {
        currency: "sek",
        product_data: {
          name: item.name,
          images: [newImage],
        },
        unit_amount: item.price * 100,
      },
      adjustable_quantity: {
        enabled: true,
        minimum: 1,
      },
      quantity: item.quantity,
    };
  });

  try {
    const session = await stripe.checkout.sessions.create({
      submit_type: "pay",
      mode: "payment",
      billing_address_collection: "auto",
      payment_method_types: ["card"],
      shipping_options: [
        { shipping_rate: "shr_1OFv4IKOC1zkRwpMQ26e3NwX" },
        { shipping_rate: "shr_1OFv3bKOC1zkRwpMBKhpBoF9" },
      ],

      line_items: lineItems,
      success_url: `${headersList.get("origin")}/thank-you`,
      cancel_url: `${headersList.get("origin")}/`,
    });

    return NextResponse.json({ sessionId: session.id });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error creating checkout session" });
  }
}
