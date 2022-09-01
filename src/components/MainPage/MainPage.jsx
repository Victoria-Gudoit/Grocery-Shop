import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductsSelectors, fetchProducts } from "store";
import { MainPageCard } from "./MainPageCard";
import css from "./styles.module.css"

export const MainPage = () => {

    const products = useSelector(ProductsSelectors.getProducts)

    console.log(products);

    // const isLoaded = useSelector(ProductsSelectors.isLoaded)
    // const isLoading = useSelector(ProductsSelectors.isLoading)
    // const isError = useSelector(ProductsSelectors.isError)

    const dispatch = useDispatch()

    const getProducts = () => dispatch(fetchProducts())
    

  useEffect(() => {
    getProducts()
  }, []);


  return <div className={css.wrapper}>
    {products.map((product) => (
        <MainPageCard {...product}/>
    ))}
  </div>;
};
