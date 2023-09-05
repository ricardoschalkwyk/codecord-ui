import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userState: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { userState } = userSlice.actions;

export default userSlice.reducer;
