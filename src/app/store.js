import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../features/ItemSlice";

export const store = configureStore({
  reducer: {
    items: itemReducer,
  },
});
