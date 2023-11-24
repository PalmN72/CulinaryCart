import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { fetchSanity, fetchProd } from "@/app/api/getProducts/fetch";
import { Product, ProductImages, Quantity, CartButton } from "@/components";

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchProd(params.slug);
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
            <CartButton product={data} />
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {product.map((item) => (
              <Product key={item._id as React.Key} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
