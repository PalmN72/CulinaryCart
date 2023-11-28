import React from "react";
import Link from "next/link";
import { ProductT } from "@/types/types";

import { urlForImage } from "@/sanity/lib/image";

const Product: React.FC<{ product: ProductT }> = ({ product }) => {
  const { slug, name, price, category } = product;

  return (
    <div className="product-marquee">
      <Link href={`/products/${category}/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlForImage(product.image[0]).width(250).height(250).url()}
            alt={name as string}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">SEK {price.toString()} / KG</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
