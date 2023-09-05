import { combineReducers, configureStore } from "@reduxjs/toolkit";

import server from "./server";
import user from "./user";

const reducer = combineReducers({ user, server });
const store = configureStore({
  reducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof reducer>;

export default store;
