import Image from "next/image";
//@ts-ignore
import { UilTrashAlt } from "@iconscout/react-unicons";
import { useDispatch } from "react-redux";

//COMPONENTS
import Counter from "./Counter";

//REDUCER ACTIONS
import {
  decrementCount,
  incrementCount,
} from "@/utils/reducers/cartReducer";
import { openNotif } from "@/utils/reducers/notifsReducer";

//CONSTANTS
import { ADD, REMOVE } from "@/utils/constants";

const CartItem = (params: any) => {
  const { product_id, name, price, image, quantity } = params.data;
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
      key={name}
    >
      <div className="cart_image">
        <Image
          key={name}
          src={image}
          width={80}
          height={80}
          alt={name}
          className="m-auto rounded-lg max-h-80 max-w-80 object-cover"
        />
      </div>
      <div className="cart_name text-left">{name}</div>
      <div className="cart_price">${(price * quantity).toFixed(2)}</div>
      <div className="cart_counter flex">
        <Counter counter={quantity} handleCounter={handleCounter} />
      </div>
      <div className="cart_action">
        <button
          type="button"
          onClick={() =>
            dispatch(
              openNotif({
                type: REMOVE,
                message: `${name} (x${quantity})`,
                data: { productId: product_id },
              })
            )
          }
        >
          <UilTrashAlt className="inline" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
