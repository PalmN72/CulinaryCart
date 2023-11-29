"use client";
import React from "react";
import { Product } from "@/components";
import { ProductT } from "@/types/types";
import { getProducts } from "../../api/getProducts/fetch";
import { ProductBanner } from "@/components";

const ProductsPage = async ({ params }: { params: { category: string } }) => {
  const products = (await getProducts()).products;
  const filteredProds = products.filter((product) => {
    if (product.category === params.category) return product;
  });

  return (
    <>
      <ProductBanner category={params.category} />
      <div className="products-container">
        {filteredProds.map((product: ProductT) => (
          <Product key={product._id as React.Key} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
