import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../sanity/lib/client";

type ProductsT = {
  map(arg0: (product: ProductsT) => String): import("react").ReactNode;
  image: [];
  _createdAt: String;
  name: String;
  _updatedAt: String;
  price: Number;
  _rev: String;
  _type: String;
  details: String;
  id: String;
  slug: { current: String; _type: String };
};

type BannerT = {
  _rev: string;
  discount: string;
  midText: string;
  smallText: string;
  largeText2: string;
  _id: string;
  desc: string;
  buttonText: string;
  product: string;
  _type: string;
  _createdAt: string;
  saleTime: string;
  largeText1: string;
  _updatedAt: string;
};

const fetchSanity = async () => {
  const query = '*[_type == "product"]';
  const bannerQ = '*[_type == "banner"]';
  const products: ProductsT = await client.fetch(query);
  const bannerData = await client.fetch(bannerQ);
  return {
    props: {
      products,
      bannerData,
    },
  };
};

const props = await fetchSanity();
console.log(props.props.bannerData);
export default function Home() {
  return (
    <main>
      <HeroBanner heroBanner={props.props.bannerData[0]} />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Fruits</p>
      </div>
      <div className="products-container">
        {props.props.products.map((product: ProductsT) => product.name)}
      </div>
      <FooterBanner></FooterBanner>
    </main>
  );
}
