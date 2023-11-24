import { Product, FooterBanner, HeroBanner } from "../components";
import { ProductT } from "@/types/types";
import { fetchSanity } from "./api/getProducts/fetch";

const data = await fetchSanity();

export default function Home() {
  const productData = data.products;
  const bannerData = data.bannerData;

  return (
    <main>
      <HeroBanner heroBanner={bannerData} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Fruits</p>
      </div>
      <div className="products-container">
        {productData.map((product: ProductT) => (
          <Product key={product._id as React.Key} product={product} />
        ))}
      </div>
      <FooterBanner banner={bannerData} />
    </main>
  );
}
