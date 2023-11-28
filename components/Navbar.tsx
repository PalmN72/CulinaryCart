import React from "react";
import Link from "next/link";
import { Cart } from ".";
import CartIconButton from "./buttons/CartIconButton";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link href="/products/fruits">Fruit</Link>
      <Link href="/products/vegetables">Vegetables</Link>
      <Link href="/products/accessories">Accessories</Link>
      <Link href="/about">About</Link>
      <Link href="/delivery">Delivery</Link>
      <CartIconButton />
      <Cart />
    </div>
  );
};

export default Navbar;
