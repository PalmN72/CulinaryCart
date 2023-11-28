import React from "react";
import { Product } from "@/components";
import { ProductT } from "@/types/types";
import { getProducts } from "../../api/getProducts/fetch";

const data = await getProducts();

const ProductsPage = ({ params }: { params: { category: string } }) => {
  const productData = data.products;
  const products = productData.filter((product) => {
    if (product.category === params.category) return product;
  });

  return (
    <div className="products-container">
      {products.map((product: ProductT) => (
        <Product key={product._id as React.Key} product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
