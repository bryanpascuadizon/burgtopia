import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import notifsReducer from "./reducers/notifsReducer";
import loadReducer from "./reducers/loadReducer";

export const store = configureStore({
    reducer: {
      cart: cartReducer,
      notifs: notifsReducer,
      loader: loadReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
