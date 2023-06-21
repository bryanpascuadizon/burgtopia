import Link from "next/link";
import React from "react";
//@ts-ignore
import { UilShoppingCart } from '@iconscout/react-unicons'

const Nav = () => {
  return (
    <div className="flex flex-between w-full mb-10">
      <div className="nav_group pt-5 font-bold">
        <Link href="/" className="nav_group_link">
          Products
        </Link>
        <Link href="/about" className="nav_group_link">
          About Us
        </Link>
      </div>
      <div className="nav_group pt-5 ml-auto">
        <Link href="/cart" className="nav_group_link">
          <UilShoppingCart className="inline"/>
        </Link>
        <Link href="/about" className="nav_group_link">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Nav;
