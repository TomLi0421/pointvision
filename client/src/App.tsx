import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import NotFoundPage from "./pages/NotFound";
import ProductPage from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterForm";
import TypeOfProductPage from "./pages/TypeOfProduct";
import ProductDetailPage from "./pages/ProductDetail";
import { useEffect, useState } from "react";

function App() {
  const [shoppingCartQty, setShoppingCartQty] = useState(
    Number(localStorage.getItem("shoppingCartQty")) || 0
  );

  // save shopping cart quantity to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("shoppingCartQty", String(shoppingCartQty));
  }, [shoppingCartQty]);

  return (
    <>
      <NavBar shoppingCartQty={shoppingCartQty} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:type" element={<TypeOfProductPage />} />
        <Route
          path="/product/:type/:productName"
          element={
            <ProductDetailPage
              handleUpdateShoppingCart={() =>
                setShoppingCartQty((prev) => {
                  localStorage.setItem("shoppingCartQty", String(prev + 1));
                  return prev + 1;
                })
              }
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
