import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { reducer as productsReducer } from "./slice";
import { productPageReducer } from "./productPageSlice";
import { categoriesPageReducer } from "./categoriesPageSlice";
import { categoryPageReducer } from "./categoryPageSlice";

const rootReducer = combineReducers({
  products: productsReducer,
  productPage: productPageReducer,
  categoriesPage: categoriesPageReducer,
  categoryPage: categoryPageReducer,
});


export const store = configureStore({
  reducer: rootReducer,
});
