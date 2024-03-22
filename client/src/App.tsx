import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
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
    <BrowserRouter>
      <NavBar shoppingCartQty={shoppingCartQty} />
      <Router />
      <Footer />
    </BrowserRouter>

    //   <Route
    //     path="/product/:type/:productName"
    //     element={
    //       <ProductDetailPage
    //         handleUpdateShoppingCart={() =>
    //           setShoppingCartQty((prev) => {
    //             localStorage.setItem("shoppingCartQty", String(prev + 1));
    //             return prev + 1;
    //           })
    //         }
    //       />
    //     }
    //   />
  );
}

export default App;
