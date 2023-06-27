import Cart from "@/models/cart";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const GET = async (request: Request, { params }: { params: any }) => {
  try {
    await connectToDB();

    const response = await Cart.findOne({ user_id: params.id });

    return new NextResponse(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to get Cart data.", { status: 500 });
  }
};

export const PATCH = async (request: Request, { params }: { params: any }) => {
  try {
    await connectToDB();

    const cartItemsForUpdate = await request.json();

    let exisitingCart = await Cart.findOne({ user_id: params.id });
    if (exisitingCart.cart_items !== null) {
      const cartExist = exisitingCart.cart_items.findIndex(
        (item: any) =>
          item.product_id.toString() === cartItemsForUpdate.product_id
      );

      if (cartExist !== -1) {
        exisitingCart.cart_items[cartExist].quantity +=
          cartItemsForUpdate.quantity;
      } else {
        exisitingCart.cart_items = [
          ...exisitingCart.cart_items,
          cartItemsForUpdate,
        ];
      }

      await exisitingCart.save();
      return new NextResponse(JSON.stringify(exisitingCart), { status: 200 });
    } else {
      return new NextResponse("Cart data not found.", { status: 404 });
    }
  } catch (error) {
    return new NextResponse("Failed to update Cart data,", { status: 500 });
  }
};

