import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "itemSlice",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      return [...state, action.payload];
    },
    updateItem: (state, action) => {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...action.payload,
          };
        } else {
          return item;
        }
      });
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    resetItem: (state, action) => {
      return [];
    },
  },
});

export const { addItem, updateItem, deleteItem, resetItem } = itemSlice.actions;
export default itemSlice.reducer;
