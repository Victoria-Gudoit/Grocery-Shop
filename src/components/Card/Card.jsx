import { useParams, useHistory  } from "react-router-dom";
import { useEffect, useState } from "react";
import { productPageSelectors, fetchProduct } from "store/productPageSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "components/common/Loader";

export const Card = () => {
  const { id } = useParams();

  const history = useHistory();

  const product = useSelector(productPageSelectors.getProduct);

  const isLoaded = useSelector(productPageSelectors.isLoaded)
  const isLoading = useSelector(productPageSelectors.isLoading)
  const isError = useSelector(productPageSelectors.isError)

  const dispatch = useDispatch();

  const getProduct = (id) => dispatch(fetchProduct(id));

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return (
    <div>
           {isLoading && <Loader />}
           {isLoaded &&
           <>
      <img width={112} src={product.image} alt="" />
      <h3>{product.title}</h3>
      <p>Категория: {product.category}</p>
      <p>Описание: {product.description}</p>
      <p>Цена: {product.price}</p></>}
      {isError && <button onClick={() => history.goBack()}>Продукт не найден, вернуться назад</button>}
    </div>
  );
};
