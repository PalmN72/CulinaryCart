import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { fetchSanity, fetchProd } from "@/app/api/getProducts/fetch";
import { Product, ProductImages, Quantity, AddToCart } from "@/components";
import BuyNow from "@/components/buttons/BuyNow";
import { ProductT } from "@/types/types";
import Marquee from "react-fast-marquee";

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const data: ProductT = await fetchProd(params.slug);
  const product = (await fetchSanity()).products;

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <ProductImages data={data} />
        </div>
        <div className="product-detail-desc">
          <h1>{data.name}</h1>
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
          <p>{data.details}</p>
          <p className="price">SEK {data.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="quantity-desc">
              <Quantity data="minus" />
              <Quantity data="qty" />
              <Quantity data="plus" />
            </p>
          </div>
          <div className="buttons">
            <AddToCart product={data} />
            <BuyNow product={data} />
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
            {product.map((item) => (
              <Product key={item._id as React.Key} product={item} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default ProductDetails;
