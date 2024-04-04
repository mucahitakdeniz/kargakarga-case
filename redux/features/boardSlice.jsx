import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    status: false,
    loading: false,
    data: [],
    errors: {},
    messages: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    getBoardsSuccess: (state, action) => {
      state.loading = false;
      state.status = action.status;
      state.data = action.payload.data;
      state.errors = action.payload.errors;
      state.messages = action.payload.messages;
    },
    fetchFail: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchStart, getBoardsSuccess, fetchFail } = boardSlice.actions;
export default boardSlice.reducer;

