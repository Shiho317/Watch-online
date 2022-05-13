import { createSlice } from "@reduxjs/toolkit";

const UserInfoSlice = createSlice({
  name: "userInfoSlice",
  initialState: [],
  reducers: {
    addInfo: (state, action) => {
      return [...state, action.payload];
    },
    resetInfo: (state, action) => {
      return [];
    },
  },
});

export const { addInfo, resetInfo } = UserInfoSlice.actions;
export default UserInfoSlice.reducer;
