import { client } from "@/sanity/lib/client";
import { ProductT, BannerT } from "@/types/types";

export const getProduct = async (slug: string) => {
  const product = await client.fetch(
    `*[_type == "product" && slug.current == '${slug}'][0]`
  );

  return product;
};

export const getBanner = async () => {
  const query = '*[_type == "banner"][0]';
  const bannerData: BannerT = await client.fetch(query);
  return bannerData;
};

export const getProducts = async () => {
  const query = `*[_type == "product"]`;
  const products: ProductT[] = await client.fetch(query);
  return { products };
};
