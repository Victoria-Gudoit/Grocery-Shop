import { useEffect } from "react";
import { useParams, useHistory  } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProductsSelectors, fetchProducts } from "store";
import { MainPageCard } from "./MainPageCard";
import css from "./styles.module.css"
import { fetchCategory, categoryPageSelectors } from "store/categoryPageSlice";
import { Banner } from "components/Banner";

export const MainPage = () => {


    const categories = useSelector(categoryPageSelectors.getCategory)

    const { category } = useParams();

    const dispatch = useDispatch()



    const getCategory = (category) => dispatch(fetchCategory(category));

    useEffect(() => {
      getCategory(category);
    }, [category]);
    



  return <div className={css.wrapper}>

    {categories.map((product) => (
        <MainPageCard {...product}/>
    ))}
  </div>;
};
