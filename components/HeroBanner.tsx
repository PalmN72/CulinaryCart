import React from "react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";

type heroBannerT = {
  _rev: string;
  discount: string;
  midText: string;
  smallText: string;
  largeText2: string;
  _id: string;
  desc: string;
  buttonText: string;
  product: string;
  _type: string;
  _createdAt: string;
  saleTime: string;
  largeText1: string;
  _updatedAt: string;
  image: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="apples-RD">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          src={urlForImage(heroBanner.image).url()}
          alt="apples"
          className="hero-banner-image"
        />
        <div>
          <Link href="/product/ID">
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
