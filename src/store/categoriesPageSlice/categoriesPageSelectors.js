import { LOAD_STATUSES } from "store/constants";

export const getCategories = (state) => state.categoriesPage.data;

export const getLoadStatus = (state) => state.categoriesPage.loadStatus;

export const isLoading = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADING;
export const isLoaded = (state) =>
  getLoadStatus(state) === LOAD_STATUSES.LOADED;
export const isError = (state) => getLoadStatus(state) === LOAD_STATUSES.ERROR;
