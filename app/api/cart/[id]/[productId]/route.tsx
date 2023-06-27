import Cart from "@/models/cart";
import { NextResponse } from "next/server";

export const PATCH = async (request: Request, { params }: { params: any }) => {
    try {
      console.log("PRODUCT ID: ", params);
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