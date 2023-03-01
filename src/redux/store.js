// import { configureStore } from "@reduxjs/toolkit";
// import auth from "./slices/auth";

// export const store = configureStore({
//   reducer: {
//     auth: auth,
//   },
// });

import { configureStore } from "@reduxjs/toolkit";
import persistedReducer from "./reducer";

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
