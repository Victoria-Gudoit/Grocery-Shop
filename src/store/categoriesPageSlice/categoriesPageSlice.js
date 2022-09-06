import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "store/constants";
import { getCategories } from "api/Api";

export const fetchCategories = createAsyncThunk(
  "categoriesPage/getProduct",
  async () => {
    const result = await getCategories();
    return result;
  }
);

export const { actions, reducer } = createSlice({
  name: "categoriesPage",
  initialState: {
    data: [],
    loadStatus: LOAD_STATUSES.UNKNOWN,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.loadStatus = LOAD_STATUSES.LOADED;
      state.data = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
  },
});
