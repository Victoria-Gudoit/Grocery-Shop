import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "api/Api";
import { LOAD_STATUSES } from "./constants";

export const fetchProducts = createAsyncThunk('products/getProducts', async () => {
    const result = await getAllProducts()
    return result
})

export const {actions, reducer} = createSlice({
    name: 'products',
    initialState: {
        data: [],
        loadStatus: LOAD_STATUSES.UNKNOWN
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loadStatus = LOAD_STATUSES.LOADING
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loadStatus = LOAD_STATUSES.LOADED;
            state.data = action.payload
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loadStatus = LOAD_STATUSES.ERROR
        });
    }
})