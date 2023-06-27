import Cart from "@/models/cart";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const { userId, cartItems }: any = await request.json();

    await connectToDB();
    const newCart = await new Cart({
      user_id: userId,
      cart_items: cartItems,
    });

    await newCart.save();
    return new NextResponse(JSON.stringify(newCart), { status: 200 });
  } catch (error) {
    return new NextResponse("Failed to add cart item.", { status: 500 });
  }
};
