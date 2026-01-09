import { useEffect, useState } from "react";
import { getAllProducts } from "../services/product-services";
import Carousel from "../components/Carousel/Carousel";
import ProductGrid from "../components/ProductGrid/ProductGrid";


const HomePage = () => {
    const [products, setProducts] = useState([]);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState("");

    useEffect(() => {

      setStatus("loading");
      setError("");

      getAllProducts().then((data) => {
        setProducts(data);
        setStatus('success');
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products.");
        setStatus("error");

      });

        
    }, []);

    const CarouselProducts = products.filter((p) => p.favourited === true);

    if (status === "loading") return <p>Loading products…</p>;
  if (status === "error") return <p>{error}</p>;

  return (
    <>
    <Carousel products={CarouselProducts} />
      <h2>All Products</h2>
      <ProductGrid products={products} />
    </>
  )
}

export default HomePage