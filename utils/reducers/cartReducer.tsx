import { createSlice, current } from "@reduxjs/toolkit";

const initialState: any = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    modifyCart: (state, action) => {
      const { payload } = action;
      let tempTotalItems: number = 0;
      let tempTotalPrice: number = 0;

      const findItem: number = current(state.items).findIndex(
        (item: any) => item.name === payload.name
      );

      if (findItem > -1) {
        state.items[findItem].count += payload.count;
      } else {
        state.items.push(payload);
      }

      state.items.map((item: any) => {
        tempTotalPrice += item.price * item.count;
        tempTotalItems += item.count;
      });

      state.totalItems = tempTotalItems;
      state.totalPrice = tempTotalPrice;
    },
    deleteItemFromCart: (state, action) => {
      const { payload } = action;
      let filterCart: Array<object> = [];
      filterCart = state.items.filter(
        (item: any) => item.name !== payload.name
      );

      state.items = filterCart;
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
