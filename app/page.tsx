import { Product, FooterBanner, HeroBanner } from "../components";
import { ProductT } from "@/types/types";
import { getProducts, getBanner } from "./api/getProducts/fetch";

const bannerData = await getBanner();
const products = (await getProducts()).products;

export default function Home() {
  return (
    <main className="main">
      <HeroBanner heroBanner={bannerData} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Fruits</p>
      </div>
      <div className="products-container">
        {products.map((product: ProductT) => (
          <Product key={product._id as React.Key} product={product} />
        ))}
      </div>
      <FooterBanner banner={bannerData} />
    </main>
  );
}
