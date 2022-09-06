import css from "./banner.module.css"
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ProductsSelectors, fetchProducts } from "store";
import { MainPage, MainPageCard} from "components/MainPage";
import { Link } from "react-router-dom";
import { useParams, useHistory  } from "react-router-dom";

export const Banner = () => {
    const [a, setA] = useState(false)
    const b = () => {
        setA(true)
    }
const {products} = useParams()

    const productss = useSelector(ProductsSelectors.getProducts)
    const dispatch = useDispatch()

    const getProducts = () => dispatch(fetchProducts())

    useEffect(() => {
        getProducts()
      }, []);
    
    return (
        <div className={css.banner}>
           <button onClick={b} to={`/products`} className={css.btn}>Купить сейчас 
            
           </button>
{ a && productss.map((product) => (
       <MainPageCard {...product}/>
    ))}
        </div>
    )
}