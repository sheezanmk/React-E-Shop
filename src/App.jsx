import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import './App.scss'
import { useState } from "react";
import { addToCart, removeFromCart, updateCart, cartCount } from "./pages/CartPage/Cart-operations";
import Footer from "./components/Footer/Footer";


function App() {

  const [cart, setCart]= useState([]);


  const getCartCount = cartCount(cart);

  const handleAddToCart = (itemToAdd, availableStock) => {
    setCart((currentCart) => addToCart(currentCart, itemToAdd, availableStock));
  }

  const handleRemoveFromCart = (productId, variant) => {
    setCart((currentCart) => removeFromCart(currentCart, productId, variant));
  };

   const handleUpdateCart = (productId, variant, newQty, availableStock) => {
    setCart((currentCart) =>
      updateCart(currentCart, productId, variant, newQty, availableStock)
    );
  };


  

  return (
   
    <BrowserRouter>
       <NavBar variant="overlay" getCartCount={getCartCount} />
       
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} handleRemoveFromCart={handleRemoveFromCart} handleUpdateCart={handleUpdateCart} />} />
        </Routes>
        <Footer />
       
        
        </BrowserRouter>
        
      
    
  )
}

export default App
