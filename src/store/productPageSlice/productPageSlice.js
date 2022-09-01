import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "store/constants";
import { getProductById } from "api/Api";

export const fetchProduct = createAsyncThunk(
  "productPage/getProduct",
  async (id) => {
    const result = await getProductById(id);
    return result;
  }
);

export const { actions, reducer } = createSlice({
  name: "productPage",
  initialState: {
    data: [],
    loadStatus: LOAD_STATUSES.UNKNOWN,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loadStatus = LOAD_STATUSES.LOADED;
      state.data = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
  },
});
