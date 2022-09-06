import css from "./header.module.css"
import { Input } from "components/common/Input"
import { categoriesPageSelectors, fetchCategories } from "store/categoriesPageSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Link } from "react-router-dom";

export const Header = () => {

    const categories = useSelector(categoriesPageSelectors.getCategories)

    const dispatch = useDispatch()

    const getCategories = () => dispatch(fetchCategories())
    

    useEffect(() => {
        getCategories()
    }, []);
  

    return (
        <div className={css.header}>
            <ul className={css.list}>
      {categories.map((category) => (
        <li>
            <Link to={`/category/${category}`}>
             {category}
            </Link>
           
            </li>
      ))}</ul>
        </div>
    )
}