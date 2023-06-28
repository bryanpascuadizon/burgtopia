"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
//@ts-ignore
import { UilShoppingCart, UilBars, UilSetting } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/utils/store";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

//REDUCER ACTIONS
import { closeLoader, openLoader } from "@/utils/reducers/loadReducer";
import { modifyCart } from "@/utils/reducers/cartReducer";

const Nav = () => {
  const [rightNav, setRightNav] = useState(false);
  const [leftNav, setLeftNav] = useState(false);
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [provider, setProvider] = useState<any>(null);
  const { data: session }: any = useSession();
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

  useEffect(() => {
    const fetchCartData = async () => {
      //Fetch Cart Items
      if (session) {
        const response = await fetch(`/api/cart/${session?.user?.id}`);
        const cartItems = await response.json();

        if (cartItems !== null) dispatch(modifyCart(cartItems.cart_items));
      }
    };

    fetchCartData();
  }, [session]);

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (dimensions.width > 769) {
        setRightNav(false);
        setLeftNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, [window.innerWidth]);

  const handleSignIn = async (id: any) => {
    dispatch(openLoader());
    await signIn(id);
    dispatch(closeLoader);
  };

  const handleHideNav = (type: string) => {
    if (type === "right") {
      setRightNav(!rightNav);
      setLeftNav(false);
    }

    if (type === "left") {
      setLeftNav(!leftNav);
      setRightNav(false);
    }

    if (type === "cart") {
      setLeftNav(false);
      setRightNav(false);
    }
  };
  return session ? (
    <div className="flex flex-between w-full mb-5 mt-5">
      {/* Main Right Navigation */}
      <div className="nav_group flex-grow self-center xl:block lg:hidden md:hidden sm:hidden xs:hidden">
        <Link href="/" className="nav_group_link" onClick={() => handleHideNav("right")}>
          BurgTopia
        </Link>
        <Link href="/" className="nav_group_link" onClick={() => handleHideNav("right")}>
          Menu
        </Link>
        <Link href="/about" className="nav_group_link" onClick={() => handleHideNav("right")}>
          About Us
        </Link>
      </div>

      {/* Sub Right Navigation */}
      <div className="nav_group flex-grow self-center xl:hidden relative">
        <button
          className="nav_group_link relative"
          onClick={() => handleHideNav("right")}
        >
          <UilBars className="inline" />
        </button>
        <div
          className={`bg-orange-50 absolute p-2 left-5 top-14 rounded-lg ${
            rightNav ? "block" : "hidden"
          }`}
        >
          <Link
            href="/"
            className="nav_group_link block"
            onClick={() => handleHideNav("right")}
          >
            Menu
          </Link>
          <Link
            href="/about"
            className="nav_group_link block"
            onClick={() => handleHideNav("right")}
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Main Left Navigation */}
      <div className="nav_group">
        <Link
          href="/cart"
          className="nav_group_link relative"
          onClick={() => handleHideNav("cart")}
        >
          <UilShoppingCart className="inline" />
          <span className="cart_counter_nav h-7 w-7 absolute rounded-full bg-orange-400 text-center self-center p-0.5 align-middle right-1 left-3">
            {totalItems}
          </span>
        </Link>
        <button
          className="nav_group_link"
          onClick={() => handleHideNav("left")}
        >
          {/* {session.user.name.split(" ")[0]} */}
          <UilSetting className="inline" />
        </button>
      </div>

      {/* Sub Left Navigation */}
      <div className={`nav_group`}>
        <div
          className={`bg-orange-50 absolute p-2 top-14 right-5 rounded-lg ${
            leftNav ? "block" : "hidden"
          }`}
        >
          <Link
            href="/"
            className="nav_group_link block"
            onClick={() => handleHideNav("left")}
          >
            My Account
          </Link>
          <button onClick={() => signOut()} className="nav_group_link block">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-between w-full mb-10 mt-10 pl-5 pr-5">
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
