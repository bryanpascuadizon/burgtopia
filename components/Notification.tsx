"use client";

import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/utils/store";
//@ts-ignore
import { UilCheckCircle, UilExclamationCircle, UilTrashAlt } from "@iconscout/react-unicons";

//REDUCER ACTIONS
import { openNotif, closeNotif } from "@/utils/reducers/notifsReducer";
import { closeLoader, openLoader } from "@/utils/reducers/loadReducer";
import { modifyCart } from "@/utils/reducers/cartReducer";

//CONSTANTS
import { ADD, REMOVE, INVALID } from "@/utils/constants";
import { useSession } from "next-auth/react";

//CART ACTIONS
import { deleteCartItems } from "@/lib/CartActions";

const Notifications = () => {
  const notifState = useSelector((state: RootState) => state.notifs);
  const { type, message, isOpen, data } = notifState;
  const dispatch = useDispatch();
  const { data: session }: any = useSession();
  const cancelButtonRef = useRef(null);

  const handleRemoveItemFromCart = async () => {
    dispatch(openLoader())
    const deleteCart = await deleteCartItems(session.user.id, data.productId);

    if (deleteCart) {
      //Fetch Cart Items
      const response = await fetch(`/api/cart/${session?.user?.id}`);
      const cartItems = await response.json();

      dispatch(modifyCart(cartItems.cart_items));
      dispatch(closeNotif())
    } else {
      dispatch(closeNotif())
      dispatch(openNotif({ type: INVALID, message: "" }));
    }

    dispatch(closeLoader())
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={() => dispatch(closeNotif())}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="text-center">
                    <div className="mt-3 mb-3 text-center">
                      <Dialog.Title className="text-center leading-6 text-orange-500 text-md m-auto w-fit">
                        {type === ADD ? (
                          <UilCheckCircle
                            height="40"
                            width="40"
                            className="inline"
                          />
                        ) : type === REMOVE ? (
                          <UilTrashAlt
                            height="40"
                            width="40"
                            className="inline"
                          />
                        ) : type === INVALID ? (
                          <UilExclamationCircle
                            height="40"
                            width="40"
                            className="inline"
                          />
                        ) : (
                          ""
                        )}
                        <span className="text-black inline align-middle">
                          {" "}
                          {type === ADD
                            ? "Added to your cart:"
                            : type === REMOVE
                            ? "Remove from your cart?"
                            : type === INVALID
                            ? "Something wrong happened"
                            : ""}
                        </span>
                      </Dialog.Title>
                      <div className="mt-5">
                        <p className="text-md">{message}</p>
                      </div>
                    </div>
                  </div>
                </div>
                {type === REMOVE ? (
                  <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 text-md justify-center font-bold">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-gray-200 px-3 py-2 shadow-sm sm:mt-0 sm:w-auto"
                      onClick={() => dispatch(closeNotif())}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      className="mr-3 inline-flex w-full rounded-md px-3 py-2 shadow-sm bg-orange-500 sm:ml-3 sm:w-auto"
                      onClick={handleRemoveItemFromCart}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Notifications;
