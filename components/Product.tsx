import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import Image from "next/image";
//@ts-ignore
import { UilShoppingCart } from "@iconscout/react-unicons";

//COMPONENTS
import Counter from "./Counter";

//REDUCER ACTIONS
import { openNotif } from "@/utils/reducers/notifsReducer";
import { modifyCart } from "@/utils/reducers/cartReducer";

//CONSTANTS
import { ADD, REMOVE } from "@/utils/constants";

const Product = (params: any) => {
  const { id, name, price, image } = params.data;
  const [counter, setCounter] = useState<number>(1);
  const dispatch = useDispatch();
  const { data: session } = useSession();

  const handleAddToCart = (cartItem: any) => {
    let newCartItem = {
      id: cartItem.id,
      name: cartItem.name,
      price: cartItem.price,
      image: cartItem.image,
      count: counter,
    };

    if (counter > 0) dispatch(modifyCart(newCartItem));

    dispatch(openNotif({ type: ADD, message: `${name} (x${counter})` }));
  };

  const handleCounter = (type: string) => {
    if (type === "add") {
      setCounter((prev) => prev + 1);
    } else {
      if (counter > 1) setCounter((prev) => prev - 1);
    }
  };

  return (
    <div className="product_item xs:w-15 xs:m-auto" key={id}>
      <div className="h-44 mb-5">
        <Image
          src={image}
          alt={name}
          className="object-cover w-full h-full rounded-lg"
          width={300}
          height={300}
        />
      </div>
      <div className="font-bold text-sm text-center">
        <p>{name}</p>
      </div>
      {session ? (
        <div className="flex mt-5">
          <Counter counter={counter} handleCounter={handleCounter} />
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
      ) : (
        ""
      )}
    </div>
  );
};

export default Product;
