import Product from "@/models/products";
import { connectToDB } from "@/utils/database";

//GET PRODUCT
export const GET = async () => {
  try {
    //Connect to DB
    await connectToDB();

    //Find All Products
    const response = await Product.find();
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    return new Response("Failed to get products.", { status: 500 });
  }
};

//POST PRODUCT

//PATCH PRODUCT

//DELETE PRODUCT
