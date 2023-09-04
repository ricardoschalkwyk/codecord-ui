import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {
    serverState: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { serverState } = serverSlice.actions;

export default serverSlice.reducer;
