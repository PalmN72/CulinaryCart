import React from "react";
import Link from "next/link";
import { Cart } from ".";
import CartIconButton from "./buttons/CartIconButton";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Apples</Link>
      </p>
      <CartIconButton />
      <Cart />
    </div>
  );
};

export default Navbar;
