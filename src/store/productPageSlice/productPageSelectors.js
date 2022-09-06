import { LOAD_STATUSES } from "store/constants";

export const getProduct = (state) => state.productPage.data;

export const getLoadStatus = (state) => state.productPage.loadStatus;

export const isLoading = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isLoaded = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADED;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
