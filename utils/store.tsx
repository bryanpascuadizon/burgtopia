import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import notifsReducer from "./reducers/notifsReducer";

export const store = configureStore({
    reducer: {
      cart: cartReducer,
      notifs: notifsReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
