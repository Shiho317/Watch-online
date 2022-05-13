import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/ItemSlice";
import messageReducer from "../features/MessageSlice";
import userReducer from "../features/UserInfoSlice";

export const store = configureStore({
  reducer: {
    items: itemReducer,
    messages: messageReducer,
    user: userReducer,
  },
});
