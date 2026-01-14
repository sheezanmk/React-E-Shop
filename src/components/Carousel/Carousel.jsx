import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Carousel.module.scss";

const Carousel = ({ products }) => {
  
    const [productIndex, setProductIndex] = useState(0);
    
    // whenever products load/change, start at the first slide
    useEffect(() => {
        setProductIndex(0);
    }, [products.length]);

    // slidde show every 3 seconds

    useEffect(()=> {

        if (products.length <= 1) return;

        const slideShowTimer = setInterval(()=> {
            setProductIndex((currentProductIndex) => {
                const lastProductIndex = products.length-1;

                if (currentProductIndex === lastProductIndex) {
                    return 0;
                }
                return currentProductIndex +1;
             });
        }, 3500);

        return () => clearInterval(slideShowTimer);

    }, [products]);

    if (products.length === 0) return null;

  const lastProductIndex = products.length - 1;
  const currentProduct = products[productIndex];

    const nextProduct = () => {
    if (productIndex === lastProductIndex) {
      setProductIndex(0);
    } else {
      setProductIndex(productIndex + 1);
    }
  };

  const prevProduct = () => {
    if (productIndex === 0) {
      setProductIndex(lastProductIndex);
    } else {
      setProductIndex(productIndex - 1);
    }
  };

    const goToSlide = (slideIndex) => {
    setProductIndex(slideIndex);
  };


  return (
 <section className={styles.carousel}>
      <div className={styles.carousel__header}>
        <h2 className={styles.carousel__title}>Featured</h2>

        {products.length > 1 && (
          <div className={styles.carousel__buttons}>
            <button type="button" className={styles.carousel__btn} onClick={prevProduct}>
              Prev
            </button>
            <button type="button" className={styles.carousel__btn} onClick={nextProduct}>
              Next
            </button>
          </div>
        )}
      </div>

      {/* Single-slide view (simpler than translateX track) */}
      <div className={styles.carousel__screen}>
        <div className={styles.carousel__slide}>
          <img
            className={styles.carousel__image}
            src={currentProduct.imageUrl}
            alt={currentProduct.name}
          />

          <div className={styles.carousel__overlay}>
            <h3 className={styles.carousel__headline}>{currentProduct.name}</h3>

            <Link to={`/product/${currentProduct.id}`} className={styles.carousel__pdp}>
              Shop Featured
            </Link>
          </div>
        </div>
      </div>

      {products.length > 1 && (
        <div className={styles.carousel__dots}>
          {products.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`${styles.carousel__dot} ${i === productIndex ? styles.active : ""}`}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};
export default Carousel;
