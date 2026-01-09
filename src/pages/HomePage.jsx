import { useEffect, useState } from "react";
import { getAllProducts } from "../services/product-services";

const HomePage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        const getProducts = async () => {
            const data = await getAllProducts();
            console.log("Products from firebase", data);
            setProducts(data);
        };

        getProducts();
    }, [])
  return (
    <h1>Home</h1>
  )
}

export default HomePage