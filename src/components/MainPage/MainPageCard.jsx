import css from "./styles.module.css";
import { Link } from "react-router-dom";

export const MainPageCard = ({ id, title, image, price }) => {
  return (
    <Link to={`/${id}`}>
      <div className={css.main}>
        <h2 className={css.title}>{title}</h2>
        <img className={css.img} src={image} alt="" />
        <span>{price} $</span>
      </div>
    </Link>
  );
};
