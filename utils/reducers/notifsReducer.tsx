import { createSlice } from "@reduxjs/toolkit";

interface NotifsReducerTypes {
  type: string;
  message: string;
  isOpen: boolean;
  data?: {}
}
const initialState: NotifsReducerTypes = {
  type: "",
  message: "",
  isOpen: false,
  data: {}
};

export const notifSlice = createSlice({
  name: "notifs",
  initialState,
  reducers: {
    openNotif: (state, action) => {
      const { payload } = action;
      state.message = payload.message;
      state.type = payload.type;
      state.data = payload.data
      state.isOpen = true;
    },
    closeNotif: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openNotif, closeNotif } = notifSlice.actions;
export default notifSlice.reducer;
