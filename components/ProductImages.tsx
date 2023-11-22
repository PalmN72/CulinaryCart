"use client";
import React, { useState } from "react";
import { urlForImage } from "@/sanity/lib/image";

const ProductImages = (data) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      <div className="image-container">
        <img
          src={urlForImage(data.data.image && data.data.image[index]).url()}
          alt=""
          className="product-detail-image"
        />
      </div>
      <div className="small-images-container">
        {data.data.image.map((item, i) => (
          <img
            src={urlForImage(item).url()}
            className={
              i === index ? "small-image selected-image" : "small-image"
            }
            onMouseEnter={() => setIndex(i)}
          />
        ))}
      </div>
    </>
  );
};

export default ProductImages;
