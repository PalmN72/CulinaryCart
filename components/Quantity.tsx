"use client";
import React from "react";
import { useCartContext } from "@/context/StateContext";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type ButtonProps = {
  data: string;
};

const Button: React.FC<ButtonProps> = ({ data }) => {
  const { decQty, incQty, qty } = useCartContext();

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
};

export default Button;
