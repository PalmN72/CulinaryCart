"use client";
import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useCartContext } from "@/context/StateContext";

const CartIconButton = () => {
  const { showCart, setShowCart, totalQuantities } = useCartContext();
  return (
    <button
      type="button"
      className="cart-icon"
      onClick={() => setShowCart(!showCart)}
    >
      <AiOutlineShopping />
      <span className="cart-item-qty">{totalQuantities}</span>
    </button>
  );
};

export default CartIconButton;
