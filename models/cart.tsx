import { ObjectId } from "mongodb";
import { Schema, models, model } from "mongoose";

const CartSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  cart_items: [
    {
      product_id: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
      },
      quantity: {
        type: Number,
      },
      name: {
        type: String,
      },
      price: {
        type: Number
      },
      image: {
        type: String
      }
    },
  ],
});

const Cart = models.Cart || model("Cart", CartSchema);
export default Cart;
