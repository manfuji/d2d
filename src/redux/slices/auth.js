import { createSlice } from "@reduxjs/toolkit";
import { initialUserState } from "../constants/initialState";
// import setUser from "../reducers/setUser";
//   count: 0,
// };

const LoginAuth = createSlice({
  name: "auth",
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      console.log(action.payload);
      state.user = action.payload;
      localStorage.removeItem("persist:root");
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { setUser, logout } = LoginAuth.actions;

export default LoginAuth.reducer;
