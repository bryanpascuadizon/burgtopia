import Cart from "@/models/cart";
import { ADD, SUBTRACT } from "@/utils/constants";
import { NextResponse } from "next/server";

export const DELETE = async (request: Request, { params }: { params: any }) => {
  try {
    let exisitingCart = await Cart.findOne({ user_id: params.id });

    const filteredCart: any = exisitingCart.cart_items.filter(
      (item: any) => item.product_id.toString() !== params.productId
    );

    exisitingCart.cart_items = filteredCart;
    exisitingCart.save();
    return new NextResponse(JSON.stringify(exisitingCart), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to delete cart item.", { status: 500 });
  }
};

export const PATCH = async (request: Request, { params }: { params: any }) => {
  try {
    const type = await request.json();

    const exisitingCart = await Cart.findOne({ user_id: params.id });

    if (exisitingCart !== null) {
      const cartExist = exisitingCart.cart_items.findIndex(
        (item: any) => item.product_id.toString() === params.productId
      );
      if (cartExist !== -1) {
        if (type === ADD) {
          exisitingCart.cart_items[cartExist].quantity =
            exisitingCart.cart_items[cartExist].quantity + 1;
        } else if (type === SUBTRACT) {
          if (exisitingCart.cart_items[cartExist].quantity > 1) {
            exisitingCart.cart_items[cartExist].quantity =
              exisitingCart.cart_items[cartExist].quantity - 1;
          }
        }
      }
      await exisitingCart.save();
      return new NextResponse(JSON.stringify(exisitingCart), { status: 200 });
    } else {
      return new NextResponse("Cart data not found", { status: 404 });
    }
  } catch (error) {
    return new NextResponse("Failed to updated cart.", { status: 500 });
  }
};
