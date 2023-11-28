import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { getProducts, getProduct } from "@/app/api/getProducts/fetch";
import { Product, ProductImages, Quantity, AddToCart } from "@/components";
import BuyNow from "@/components/buttons/BuyNow";
import { ProductT } from "@/types/types";
import Marquee from "react-fast-marquee";

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const product: ProductT = await getProduct(params.slug);
  const products = (await getProducts()).products;

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <ProductImages data={product} />
        </div>
        <div className="product-detail-desc">
          <h1>{product.name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{product.details}</p>
          <p className="price">SEK {product.price} / KG</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <Quantity data="minus" />
              <Quantity data="qty" />
              <Quantity data="plus" />
            </p>
          </div>
          <div className="buttons">
            <AddToCart product={product} />
            <BuyNow product={product} />
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <Marquee
          className="marquee"
          play={true}
          pauseOnHover={true}
          iteration-count={0}
          speed={100}
        >
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id as React.Key} product={item} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ProductDetails;
