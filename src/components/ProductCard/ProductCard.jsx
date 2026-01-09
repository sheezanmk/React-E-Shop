import { Link } from "react-router-dom";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  const { id, name, pricePerUnit, imageUrl, quantity } = product;

  const isOutOfStock = quantity <= 0;

  return (
    <article className={styles.card}>
      <Link to={`/product/${id}`} className={styles.card__imageLink}>
        <img className={styles.card__image} src={imageUrl} alt={name} />
      </Link>

      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{name}</h3>
        <div className={styles.card__info}>
          <p className={styles.card__price}>{pricePerUnit}</p>
          {isOutOfStock ? (
            <span className={styles.card__ooo}>Out of stock</span>
          ) : (
            <span className={styles.card__inStock}>In stock</span>
          )}
        </div>
        <Link to={`/product/${id}`} className={styles.card__button}>
          View product
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
