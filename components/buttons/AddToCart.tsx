"use client";
import React from "react";
import { useCartContext } from "@/context/StateContext";

type CartButtonProp = {
  product: {};
};

const AddToCart: React.FC<CartButtonProp> = ({ product }) => {
  const { onAdd, qty } = useCartContext();
  return (
    <button
      type="button"
      className="add-to-cart"
      onClick={() => onAdd(product, qty)}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;
