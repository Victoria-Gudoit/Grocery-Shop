import { request } from "./request";

const HOST_PRODUCTS = "https://fakestoreapi.com/products";

export const getAllProducts = () => {
  return request(HOST_PRODUCTS);
};

export const getProductById = (id) => {
    return request(`${HOST_PRODUCTS}/${id}`);
}