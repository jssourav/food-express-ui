import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    redirectTo: "/my-profile",
  },
  reducers: {
    setLoggedIn: (state, action) => {
      const userToken = localStorage.getItem("token");
      if (userToken && userToken !== "undefined") {
        state.isAuth = action.payload;
      }
      if (action.payload === false) {
        localStorage.removeItem("token");
      }
    },
    setRedirectUrl: (state, action) => {
      if (action.payload !== "/signin") {
        state.redirectTo = action.payload;
      }
    },
  },
});

export const { setLoggedIn, setRedirectUrl } = authSlice.actions;
export default authSlice.reducer;
