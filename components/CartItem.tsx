import Image from "next/image";
//@ts-ignore
import { UilTrashAlt } from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";

//COMPONENTS
import Counter from "./Counter";

//REDUCER ACTIONS
import {
  decrementCount,
  incrementCount,
  modifyCart,
} from "@/utils/reducers/cartReducer";
import { openNotif } from "@/utils/reducers/notifsReducer";

//CONSTANTS
import { ADD, REMOVE, INVALID } from "@/utils/constants";
import { useSession } from "next-auth/react";
import { updateQuantity } from "@/lib/CartActions";
import { closeLoader, openLoader } from "@/utils/reducers/loadReducer";

const CartItem = (params: any) => {
  const { product_id, name, price, image, quantity } = params.data;
  const dispatch = useDispatch();
  const { data: session }: any = useSession();

  const handleCounter = async (type: string) => {
    dispatch(openLoader());
    const updateCart = await updateQuantity(session.user.id, product_id, type);

    if (updateCart) {
      //Fetch Cart Items
      const response = await fetch(`/api/cart/${session?.user?.id}`);
      const cartItems = await response.json();

      dispatch(modifyCart(cartItems.cart_items));
    } else {
      dispatch(openNotif({ type: INVALID }));
    }

    dispatch(closeLoader());
  };

  return (
    <div
      className="cart_item rounded-lg grid grid-cols-6 bg-grey-100 mb-5 text-center items-center p-2"
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
      <div className="cart_price">₱{(price).toFixed(2)}</div>
      <div className="cart_price">₱{(price * quantity).toFixed(2)}</div>
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
