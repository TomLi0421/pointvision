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

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:type" element={<TypeOfProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
