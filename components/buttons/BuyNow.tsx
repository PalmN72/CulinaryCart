"use client";
import { useCartContext } from "@/context/CartContext";
import { ProductT } from "@/types/types";
import React from "react";

type BuyNowProps = {
  product: ProductT;
};

const BuyNow: React.FC<BuyNowProps> = ({ product }) => {
  const { setShowCart, onAdd, qty } = useCartContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };
  return (
    <button type="button" className="buy-now" onClick={handleBuyNow}>
      Buy Now
    </button>
  );
};

export default BuyNow;
