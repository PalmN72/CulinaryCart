import { client } from "@/sanity/lib/client";
import { ProductT, BannerT } from "@/types/types";

export const fetchProd = async (slug: string) => {
  const data = await client.fetch(
    `*[_type == "product" && slug.current == '${slug}'][0]`
  );

  return data;
};

export const fetchSanity = async () => {
  const query = '*[_type == "product"]';
  const bannerQ = '*[_type == "banner"][0]';
  const products: ProductT[] = await client.fetch(query);
  const bannerData: BannerT = await client.fetch(bannerQ);
  return {
    products,
    bannerData,
  };
};
