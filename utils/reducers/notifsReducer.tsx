import { createSlice } from "@reduxjs/toolkit";

interface NotifsReducerTypes {
  type: string;
  message: string;
  isOpen: boolean;
}
const initialState: NotifsReducerTypes = {
  type: "",
  message: "",
  isOpen: false,
};

export const notifSlice = createSlice({
  name: "notifs",
  initialState,
  reducers: {
    openNotif: (state, action) => {
      const { payload } = action;
      state.message = payload.message;
      state.type = payload.type;
      state.isOpen = true;
    },
    closeNotif: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openNotif, closeNotif } = notifSlice.actions;
export default notifSlice.reducer;
