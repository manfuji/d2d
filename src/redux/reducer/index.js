import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import auth from "../slices/auth";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: auth,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
