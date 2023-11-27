"use client";
import React from "react";
import { useCartContext } from "@/context/CartContext";
import { ProductT } from "@/types/types";

type CartButtonProp = {
  product: ProductT;
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
