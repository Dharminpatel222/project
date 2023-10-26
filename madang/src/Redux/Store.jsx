import { configureStore } from "@reduxjs/toolkit";
import authslice from "../Redux/CreateSlice"
import ProductSlice from "../Redux/ProductSlice";

export const store = configureStore({
  reducer: {
    authslice,
    ProductSlice,
  },
});