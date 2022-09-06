import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "store/constants";
import { getCategoryById } from "api/Api";

export const fetchCategory = createAsyncThunk(
  "categoryPage/getCategory",
  async (category) => {
    const result = await getCategoryById(category);
    return result;
  }
);

export const { actions, reducer } = createSlice({
  name: "categoryPage",
  initialState: {
    data: [],
    loadStatus: LOAD_STATUSES.UNKNOWN,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.loadStatus = LOAD_STATUSES.LOADED;
      state.data = action.payload;
    });
    builder.addCase(fetchCategory.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
  },
});
