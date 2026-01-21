import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getAllProducts } from "../../services/product-services";
import Carousel from "../../components/Carousel/Carousel";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Hero from "../../components/Hero/Hero";


const HomePage = ({productsRef}) => {

 
  const location = useLocation();

 useEffect(() => {
  if (location.state && location.state.scrollToProducts) {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}, [location]);
 

  const scrollToProducts = () => {
    
   if (productsRef.current) {
    productsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

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
    <Hero onShopNow={scrollToProducts} />
    <div className="app">
    <Carousel products={CarouselProducts} />
    <div ref={productsRef}  />
      <h2>All Products</h2>
      

      <ProductGrid products={products} />
      </div>
    </>
    
  )
}

export default HomePage