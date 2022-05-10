import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/ItemSlice";
import messageReducer from "../features/MessageSlice";

export const store = configureStore({
  reducer: {
    items: itemReducer,
    messages: messageReducer,
  },
});
