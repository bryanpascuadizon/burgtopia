import React, { useState } from "react";
import burgerImage from "@/assets/images/blt-burger.png";
import Image from "next/image";
//@ts-ignore
import { UilShoppingCart } from "@iconscout/react-unicons";

import { modifyCart } from "@/utils/reducers/cartReducer";
import { useDispatch } from "react-redux";
import Counter from "./Counter";
import { openNotif } from "@/utils/reducers/notifsReducer";

const Product = (params: any) => {
  const { id, name, price } = params.data;
  const [counter, setCounter] = useState<number>(1);
  const dispatch = useDispatch();

  const handleAddToCart = (cartItem: any) => {
    let newCartItem = {
      id: cartItem.id,
      name: cartItem.name,
      price: cartItem.price,
      count: counter,
    };

    if (counter > 0) dispatch(modifyCart(newCartItem));

    dispatch(openNotif({type: 'Add', message: `${name} (x${counter})`}))
  };

  const handleCounter = (type: string) => {
    if(type === 'add') {
      setCounter((prev) => prev + 1)
    } else {
      if(counter > 1) setCounter((prev) => prev - 1)
    }
  }

  return (
    <div className="product_item xs:w-15 xs:m-auto" key={id}>
      <div className="h-44 mb-5">
        <Image
          src={burgerImage}
          alt={name}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="font-bold text-sm text-center mb-5">
        <p>{name}</p>
      </div>
      <div className="flex">
        <Counter counter={counter} handleCounter={handleCounter}/>
        <div className="product_price p-2 text-right font-bold">${price}</div>
        <div className="product_cart p-2 bg-orange-50 rounded-lg">
          <button
            className="self-center text-center text-orange-500"
            onClick={() => handleAddToCart(params.data)}
          >
            <UilShoppingCart className="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
