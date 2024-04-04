import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    currentUser: null,
    loading: false,
    email: false,
    token: null,
    status: null,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.status = action.status;
      state.currentUser = action.payload.fullName;
      state.email = action.payload.email;
      state.token = action.payload.token;
    },
    logoutSuccess: (state) => {
      state.loading = false;
      state.status = null;
      state.loading = null;
      state.currentUser = null;
      state.email = null;
      state.token = null;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
    },
    fetchFail: (state) => {
      state.loading = false;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  fetchFail,
} = auth.actions;
export default auth.reducer;
