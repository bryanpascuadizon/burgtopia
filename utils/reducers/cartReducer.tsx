import { createSlice, current } from "@reduxjs/toolkit";
import { closeNotif } from "./notifsReducer";

const initialState: any = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const itemPriceReCount = (stateItems: any, state: any) => {
  let tempTotalItems: number = 0;
  let tempTotalPrice: number = 0;

  stateItems.map((item: any) => {
    tempTotalPrice += item.price * item.quantity;
    tempTotalItems += item.quantity;
  });

  state.totalItems = tempTotalItems;
  state.totalPrice = tempTotalPrice;
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    modifyCart: (state, action) => {
      const { payload } = action;
      state.items = [...payload];

      itemPriceReCount(state.items, state);
    },
    deleteItemFromCart: (state, action) => {
      const { payload } = action;
      let filterCart: Array<object> = [];
      filterCart = state.items.filter(
        (item: any) => item.name !== payload.data.name
      );

      state.items = filterCart;

      itemPriceReCount(filterCart, state);
    },
    incrementCount: (state, action) => {
      const { payload } = action;

      let temptotalPrice: number = 0;

      state.items.map((item: any) => {
        if (item.name === payload) item.count += 1;
        temptotalPrice += item.price * item.count;
      });

      state.totalPrice = temptotalPrice;
      state.totalItems += 1;
    },
    decrementCount: (state, action) => {
      const { payload } = action;

      let temptotalPrice: number = 0;

      state.items.map((item: any) => {
        if (item.name === payload && item.count > 1) {
          item.count -= 1;
          state.totalItems -= 1;
        }
        temptotalPrice += item.price * item.count;
      });

      state.totalPrice = temptotalPrice;
    },
  },
});

export const {
  modifyCart,
  deleteItemFromCart,
  incrementCount,
  decrementCount,
} = cartSlice.actions;
export default cartSlice.reducer;
