import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  isLoading: false,
};

export const loadSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    openLoader: (state) => {
      state.isLoading = true;
    },
    closeLoader: (state) => {
      state.isLoading = false;
    },
  },
});

export const { openLoader, closeLoader } = loadSlice.actions;
export default loadSlice.reducer;
