import { ObjectId } from "mongodb";
import { Schema, models, model } from "mongoose";

const ProductSchema = new Schema({
  id: {
    type: ObjectId,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  category: {
    type: ObjectId,
  },
  image: {
    type: String,
  },
});

const Product = models.Product || model("Product", ProductSchema);
export default Product;
