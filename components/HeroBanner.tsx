import React from "react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { BannerT } from "@/types/types";

const HeroBanner: React.FC<{ heroBanner: BannerT }> = ({ heroBanner }) => {
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
