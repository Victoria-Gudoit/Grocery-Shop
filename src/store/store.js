import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as productsReducer } from "./slice";
import { productPageReducer } from "./productPageSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  productPage: productPageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
