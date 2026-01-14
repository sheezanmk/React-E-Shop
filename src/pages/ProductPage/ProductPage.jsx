import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/product-services";
import styles from "./ProductPage.module.scss";

const ProductPage = ({ handleAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const [selectedVariant, setSelectedVariant] = useState("");
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setStatus("loading");
    setError("");
    getProductById(id)
      .then((data) => {
        setProduct(data);
        setStatus("success");
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch product");
        setStatus("error");
      });
  }, [id]);

  useEffect(() => {
    if (product) {
      if (product.variants && product.variants.length > 0) {
        setSelectedVariant(product.variants[0]);
      }
      setQty(1);
    }
  }, [product]);

  if (status === "loading") return <p>Loading product…</p>;
  if (status === "error") return <p>{error}</p>;

  const isOutOfStock = product.quantity <= 0;

  const handleDecrement = () => {
    setQty((current) => (current > 1 ? current - 1 : 1));
  };

  const handleIncrement = () => {
    setQty((current) => {
      if (current >= product.quantity) return current;
      return current + 1;
    });
  };

  return (
    <section className={styles.pdp}>
      <img
        className={styles.image}
        src={product.imageUrl}
        alt={product.name}
        style={{ width: "420px", maxWidth: "100%", borderRadius: "16px" }}
      />

      <div className={styles.details}>
        <h1>{product.name}</h1>
        <p className={styles.price}>
          ${Number(product.pricePerUnit).toFixed(2)}
        </p>

        {isOutOfStock ? (
          <p className={styles.stock}>Out of stock</p>
        ) : (
          <p className={styles.stock}>In stock: {product.quantity}</p>
        )}

       
        <div className={styles.section}>
          <label htmlFor="variant" className={styles.label}>
            Choose size
          </label>

          <select
            className={styles.select}
            id="variant"
            value={selectedVariant}
            onChange={(e) => setSelectedVariant(e.target.value)}
            disabled={
              isOutOfStock ||
              !product.variants?.length ||
              product.variants.length === 0
            }
          >
            {product.variants &&
              product.variants.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
          </select>
        </div>

        
        <div className={styles.section}>
          <p className={styles.label}>Quantity</p>

          <div className={styles.qtyRow}>
            <button
              className={styles.qtyBtn}
              type="button"
              onClick={handleDecrement}
              disabled={isOutOfStock || qty <= 1}
            >
              -
            </button>

            <span className={styles.qtyValue}>{qty}</span>

            <button
              className={styles.qtyBtn}
              type="button"
              onClick={handleIncrement}
              disabled={isOutOfStock || qty >= product.quantity}
            >
              +
            </button>
          </div>

          {!isOutOfStock && qty >= product.quantity && (
            <p p className={styles.helper}>
              You’ve reached the maximum available stock.
            </p>
          )}
        </div>

      
        <button
          type="button"
          disabled={isOutOfStock || !selectedVariant}
          className={styles.addBtn}
          onClick={() => {
            const item = {
              productId: product.id,
              name: product.name,
              pricePerUnit: product.pricePerUnit,
              imageUrl: product.imageUrl,
              variant: selectedVariant,
              quantity: qty,
            };
            handleAddToCart(item, product.quantity);
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductPage;
