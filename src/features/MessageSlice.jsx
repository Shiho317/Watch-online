import { createSlice } from "@reduxjs/toolkit";

const MessageSlice = createSlice({
  name: "messageSlice",
  initialState: [],
  reducers: {
    addMessage: (state, action) => {
      return [...state, action.payload];
    },
    resetChat: () => {
      return []
    }
  },
});

export const { addMessage, resetChat } = MessageSlice.actions;
export default MessageSlice.reducer;
