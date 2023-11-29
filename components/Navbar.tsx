import React from "react";
import Link from "next/link";
import { Cart } from ".";
import CartIconButton from "./buttons/CartIconButton";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link href="/">Culinary Cart</Link>
      <Link href="/products/fruits">fruits</Link>
      <Link href="/products/vegetables">vegetables</Link>
      <Link href="/products/accessories">accessories</Link>
      <Link href="/about">about</Link>
      <Link href="/delivery">delivery</Link>
      <CartIconButton />
      <Cart />
    </div>
  );
};

export default Navbar;
