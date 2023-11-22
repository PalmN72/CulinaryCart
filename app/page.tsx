import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../sanity/lib/client";
import { ProductT, BannerT } from "@/types/types";

const fetchSanity = async () => {
  const query = '*[_type == "product"]';
  const bannerQ = '*[_type == "banner"][0]';
  const products: ProductT[] = await client.fetch(query);
  const bannerData: BannerT = await client.fetch(bannerQ);
  return {
    products,
    bannerData,
  };
};

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
          <Product key={product.id as React.Key} product={product} />
        ))}
      </div>
      <FooterBanner banner={bannerData} />
    </main>
  );
}
