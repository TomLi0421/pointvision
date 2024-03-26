import "./App.css";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/NavBar";
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import LoggedinProvider from "./context/LoggedinContext";
import OrderProvider from "./context/OrderContext";
import UserProvider from "./context/UserContex";

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <LoggedinProvider>
          <NavBar />
          <OrderProvider>
            <UserProvider>
              <Router />
            </UserProvider>
          </OrderProvider>
        </LoggedinProvider>
      </ShoppingCartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
