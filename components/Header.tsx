import React from "react";
import { Navbar } from ".";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <p className="logo">
        <Link href="/">Culinary Cart</Link>
      </p>
      <Navbar />
    </>
  );
};

export default Header;
