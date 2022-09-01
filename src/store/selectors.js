import { LOAD_STATUSES } from "./constants";

export const getProducts = (state) => state.products.data;

export const getLoadStatus = (state) => state.products.loadStatus;

export const isLoading = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADING
export const isLoaded = (state) => getLoadStatus(state) === LOAD_STATUSES.LOADED
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR