"use client";

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/utils/store";
import CartItem from "@/components/CartItem";

const Cart = () => {
  const allDispatch = useSelector((state: RootState) => state.cart);
  const [cartList, setCartList] = useState<Array<object>>([]);

  const { items, totalItems, totalPrice } = allDispatch;

  useEffect(() => {
    setCartList(items);
  }, [items, totalItems, totalPrice]);

  return (
    <div>
      {cartList.length > 0 ? (
        <div>
          {cartList.map((item) => (
            <CartItem data={item}/>
          ))}
          <div className="rounded-lg grid grid-cols-5 mb-5 text-center items-center font-bold">
            <p className="">Total</p>
            <p></p>
            <p className="">${totalPrice}</p>
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