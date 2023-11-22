import React from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { fetchSanity, fetchProd } from "@/app/api/fetch";
import { Product, ProductImages } from "@/components";
import { useCartContext } from "@/context/StateContext";

const ProductDetails = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchProd(params.slug);
  const product = (await fetchSanity()).products;
  const { decQty, incQty, qty } = useCartContext();
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
              <span className="minus" onClick={decQty}>
                <AiOutlineMinus />
              </span>
            </p>
            <p className="quantity-desc">
              <span className="num">{qty}</span>
            </p>
            <p className="quantity-desc">
              <span className="plus" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button type="button" className="add-to-cart">
              Add to Cart
            </button>
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
              <Product key={item.id as React.Key} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
