"use client"

import Link from "next/link";
import React from "react";
//@ts-ignore
import { UilShoppingCart } from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";

const Nav = () => {
  const cartState = useSelector((state: RootState) => state.cart);

  const { totalItems } = cartState;

  return (
    <div className="flex flex-between w-full mb-10 mt-5">
      <div className="nav_group pt-5 font-bold">
        <Link href="/" className="nav_group_link">
          Products
        </Link>
        <Link href="/about" className="nav_group_link">
          About Us
        </Link>
      </div>
      <div className="nav_group pt-5 ml-auto">
        <Link href="/cart" className="nav_group_link relative">
          <UilShoppingCart className="inline" />
          <span className="cart_counter_nav h-7 w-7 absolute rounded-full bg-orange-400 text-center self-center p-0.5 align-middle top-1 right-1">{totalItems}</span>
        </Link>
        <Link href="/about" className="nav_group_link">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Nav;
