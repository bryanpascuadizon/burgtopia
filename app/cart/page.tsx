"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";
import CartItem from "@/components/CartItem";

const Cart = () => {
  const cartState = useSelector((state: RootState) => state.cart);
  const [cartList, setCartList] = useState<Array<object>>([]);

  const { items, totalItems, totalPrice } = cartState;

  useEffect(() => {
    setCartList(items);
  }, [items, totalItems, totalPrice]);

  return (
    <div>
      {cartList.length > 0 ? (
        <div>
          <div className="rounded-lg grid grid-cols-5 mb-5 text-center items-center font-bold">
            <p className=""></p>
            <p className="text-left font-bold">Item</p>
            <p className="">Price</p>
          <p className="">Quantity</p>
            <p className=""></p>
          </div>
          {cartList.map((item) => (
            <CartItem data={item} />
          ))}
          <div className="rounded-lg grid grid-cols-5 mb-5 text-center items-center font-bold">
            <p></p>
            <p className="text-left">Total</p>
            <p className="">${totalPrice.toFixed(2)}</p>
            <p className="">{totalItems}</p>
            <button className="rounded-lg bg-orange-300 p-2">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="m-auto text-center mt-20">
          You have no items in your cart.
        </div>
      )}
    </div>
  );
};

export default Cart;
