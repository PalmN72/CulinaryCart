"use client";
import React from "react";
import { useCartContext } from "@/context/CartContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { ProductT } from "@/types/types";

type ButtonProps = {
  data: string;
  item?: ProductT;
};

const Button: React.FC<ButtonProps> = ({ data, item }) => {
  const { decQty, incQty, qty, toggleCartItemQuantity } = useCartContext();

  if (data === "minus") {
    return (
      <span className="minus" onClick={decQty}>
        <AiOutlineMinus />
      </span>
    );
  }
  if (data === "plus") {
    return (
      <span className="plus" onClick={incQty}>
        <AiOutlinePlus />
      </span>
    );
  }

  if (data === "qty") {
    return <span className="num">{qty}</span>;
  }

  // Inside cart

  if (item) {
    if (data === "minusC") {
      return (
        <span
          className="minus"
          onClick={() => toggleCartItemQuantity(item._id, "dec")}
        >
          <AiOutlineMinus />
        </span>
      );
    }
    if (data === "plusC") {
      return (
        <span
          className="plus"
          onClick={() => toggleCartItemQuantity(item._id, "inc")}
        >
          <AiOutlinePlus />
        </span>
      );
    }

    if (data === "qtyC") {
      return <span className="num">{item.quantity}</span>;
    }
  }
};

export default Button;
