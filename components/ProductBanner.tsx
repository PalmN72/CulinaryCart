import React from "react";

const ProductBanner = ({ category }: { category: string }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <h3>{category}</h3>
      </div>
    </div>
  );
};

export default ProductBanner;
