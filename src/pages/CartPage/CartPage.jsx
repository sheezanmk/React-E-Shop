import styles from "./CartPage.module.scss";
import { cartPrice } from "./Cart-operations";

const CartPage = ({cart, handleRemoveFromCart, handleUpdateCart}) => {

  if(!cart || cart.length === 0) {
    return (
      <section  className={styles.cart}>
        <h1  className={styles.title}>Your Cart</h1>
        <p className={styles.empty}>Your cart is empty.</p>
      </section>
    );
  }
  const total = cart.reduce ((sum, item) => sum + item.pricePerUnit * item.quantity, 0);

  return (
   <section className={styles.cart} >
    <h1 className={styles.title}>Your Cart</h1>
    {cart.map((item) => {
      const key = `${item.productId}-${item.variant}`;
      const handleDecrement = () => {
        
        handleUpdateCart (item.productId, item.variant, item.quantity-1, item.availableStock);
      };

      const handleIncrement = () => {
        
        handleUpdateCart (item.productId, item.variant, item.quantity+1, item.availableStock);
      };

      const canDecQty = item.quantity > 1;
        const canIncQty = item.quantity < item.availableStock;
return (
  <article key={key} className={styles.item}>
            <img
              src={item.imageUrl}
              alt={item.name}
              className={styles.image}
            />

            <div className={styles.details}>
              <h3 className={styles.details}>{item.name}</h3>
              <p className={styles.variant}>Variant: {item.variant}</p>
              <p className={styles.price}>${Number(item.pricePerUnit).toFixed(2)}</p>

              <div className={styles.controls}>
                <button type="button" onClick={handleDecrement} disabled={!canDecQty} className={styles.qtyBtn}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button type="button" onClick={handleIncrement} disabled={!canIncQty} className={styles.qtyBtn}>
                  +
                </button>

                <button
                  type="button"
                  onClick={() => handleRemoveFromCart(item.productId, item.variant)}
                   className={styles.remove}
                >
                  Remove
                </button>
              </div>

              {!canIncQty && (
                <p>
                  Max stock reached ({item.availableStock})
                </p>
              )}
            </div>
          </article>
);
    })}
    <h2 className={styles.total}>Total: ${total.toFixed(2)}</h2>


   </section>
  );
};

export default CartPage