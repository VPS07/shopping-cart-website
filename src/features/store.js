import { configureStore } from "@reduxjs/toolkit";
import productDataReducer from "./productDataSlice";
import cartDataReducer from "./cartDataSlice";

const store = configureStore({
  reducer: {
    productDataReducer,
    cartDataReducer,
  },
});

export default store;
