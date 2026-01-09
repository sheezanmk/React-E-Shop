import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import './App.scss'

function App() {
  

  return (
    
    <BrowserRouter>
       <NavBar />
       <main className="app">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        </main>
        </BrowserRouter>
      
    
  )
}

export default App
