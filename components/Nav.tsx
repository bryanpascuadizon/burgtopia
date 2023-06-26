"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
//@ts-ignore
import { UilShoppingCart } from "@iconscout/react-unicons";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState } from "@/utils/store";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { closeLoader, openLoader } from "@/utils/reducers/loadReducer";

const Nav = () => {
  const [provider, setProvider] = useState<any>(null);
  const { data: session } = useSession();
  const dispatch = useDispatch();
  const cartState = useSelector((state: RootState) => state.cart);

  const { totalItems } = cartState;

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProvider(response);
    };
    setUpProviders();
  }, []);

  const handleSignIn = async (id: any) => {
    dispatch(openLoader());
    await signIn(id);
    dispatch(closeLoader);
  };

  return session ? (
    <div className="flex flex-between w-full mb-5 mt-5 pl-5 pr-5">
      <div className="nav_group flex-grow self-center">
        <Link href="/" className="nav_group_link">
          BurgTopia
        </Link>
        <Link href="/" className="nav_group_link">
          Menu
        </Link>
        <Link href="/about" className="nav_group_link">
          About Us
        </Link>
      </div>
      <div className="nav_group">
        <Link href="/cart" className="nav_group_link relative">
          <UilShoppingCart className="inline" />
          <span className="cart_counter_nav h-7 w-7 absolute rounded-full bg-orange-400 text-center self-center p-0.5 align-middle right-1 left-3">
            {totalItems}
          </span>
        </Link>
        <button className="nav_group_link" onClick={() => signOut()}>
          Sign Out
        </button>
      </div>
    </div>
  ) : (
    <div className="flex flex-between w-full mb-5 mt-5 pl-5 pr-5">
      <div className="nav_group flex-grow">
        <Link href="/" className="nav_group_link">
          BurgTopia
        </Link>
      </div>
      <div className="nav_group">
        {provider &&
          Object.values(provider).map((provider: any) => (
            <button
              type="button"
              key={provider.name}
              onClick={() => handleSignIn(provider.id)}
              className="black_btn"
            >
              Sign In
            </button>
          ))}
      </div>
    </div>
  );
};

export default Nav;
