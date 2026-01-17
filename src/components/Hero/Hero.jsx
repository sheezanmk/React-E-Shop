import styles from "./Hero.module.scss";

const Hero = ({onShopNow}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__inner}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>New Season Essentials</h1>
          <p className={styles.hero__text}>
            Clean fits, everyday comfort. Browse the latest drops.
          </p>

          <button type="button" className={styles.hero__cta} onClick={onShopNow}>
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};


export default Hero