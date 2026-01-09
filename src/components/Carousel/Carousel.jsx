import { Link } from "react-router-dom";
import styles from "./Carousel.module.scss";

const Carousel = ({ products }) => {
  if (products.length === 0) return null;
  return (
    <section className={styles.carousel}>
      <h2 className={styles.carousel__title}>Featured</h2>
      <div className={styles.carousel__slideShow}>
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className={styles.carousel__item}
          >
            <img
              className={styles.carousel__image}
              src={product.imageUrl}
              alt={product.name}
            />
            <div className={styles.carousel__label}>
              <p className={styles.carousel__name}>{product.name}</p>
              <p className={styles.carousel__price}>
                ${product.pricePerUnit.toFixed(2)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
