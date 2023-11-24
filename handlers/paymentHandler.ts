import { loadStripe } from "@stripe/stripe-js";
export const handlePayment = async (cartItems) => {
  try {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );

    if (!stripe) throw new Error("Stripe failed to initialize.");

    const checkoutResponse = await fetch("/api/payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems }),
    });

    const { sessionId } = await checkoutResponse.json();
    const stripeError = await stripe.redirectToCheckout({ sessionId });

    if (stripeError) {
      console.error(stripeError);
    }
  } catch (error) {
    console.error(error);
  }
};
