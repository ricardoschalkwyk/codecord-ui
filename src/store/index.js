import { configureStore } from "@reduxjs/toolkit";

import { serverState } from "./server";
import { userState } from "./user";

export const store = configureStore({
  reducer: { user: userState, server: serverState },
});
