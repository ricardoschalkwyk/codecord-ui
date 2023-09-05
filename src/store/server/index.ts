import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Server = {
  name: string;
};

type InitialState = {
  data: Server[];
};

const initialState: InitialState = {
  data: [],
};

export const serverSlice = createSlice({
  name: "server",
  initialState,
  reducers: {
    serverState: (state, action) => {
      state.data = action.payload;
    },
    addToList: (state, action: PayloadAction<Server>) => {
      state.data.push(action.payload);
    },
  },
});

export const { serverState, addToList } = serverSlice.actions;

export default serverSlice.reducer;
