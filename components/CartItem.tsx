import Image from "next/image";
//@ts-ignore
import { UilTrashAlt } from "@iconscout/react-unicons";
import {
  decrementCount,
  deleteItemFromCart,
  incrementCount,
} from "@/utils/reducers/cartReducer";
import { openNotif } from "@/utils/reducers/notifsReducer";
import { useDispatch } from "react-redux";
import Counter from "./Counter";
import { ADD, REMOVE } from "@/utils/constants";

const CartItem = (params: any) => {
  const { id, name, price, image, count } = params.data;
  const dispatch = useDispatch();

  const handleCounter = (type: string) => {
    if (type === ADD) {
      dispatch(incrementCount(name));
    } else {
      dispatch(decrementCount(name));
    }
  };

  return (
    <div
      className="cart_item rounded-lg grid grid-cols-5 bg-grey-100 mb-5 text-center items-center p-2"
      key={id}
    >
      <div className="cart_image">
        <Image
          src={image}
          alt={name}
          width={80}
          height={80}
          className="m-auto rounded-lg max-h-80 max-w-80 object-cover"
        />
      </div>
      <div className="cart_name text-left">{name}</div>
      <div className="cart_price">${(price * count).toFixed(2)}</div>
      <div className="cart_counter flex">
        <Counter counter={count} handleCounter={handleCounter} />
      </div>
      <div className="cart_action">
        <button type="button" onClick={() => dispatch(openNotif({type: REMOVE, message: `${name} (x${count})`, data: { name: name }}))}>
          <UilTrashAlt className="inline" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
