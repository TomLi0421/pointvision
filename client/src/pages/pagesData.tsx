import HomePage from "./Home";
import LoginPage from "./Login";
import NotFoundPage from "./NotFound";
import ProductPage from "./Product";
import ProductDetailPage from "./ProductDetail";
import RegisterPage from "./RegisterForm";
import ShoppingCartPage from "./ShoppingCart";
import TypeOfProductPage from "./TypeOfProduct";
import { routerType } from "./types/router.types";

const pageData: routerType[] = [
  {
    path: "",
    element: <HomePage />,
    title: "home",
  },
  {
    path: "product",
    element: <ProductPage />,
    title: "product",
  },
  {
    path: "product/:type",
    element: <TypeOfProductPage />,
    title: "type of product",
  },
  {
    path: "product/:type/:productName",
    element: <ProductDetailPage />,
    title: "product detail",
  },
  {
    path: "login",
    element: <LoginPage />,
    title: "login",
  },
  {
    path: "register",
    element: <RegisterPage />,
    title: "register",
  },
  {
    path: "shopping_cart",
    element: <ShoppingCartPage />,
    title: "shopping cart",
  },
  {
    path: "*",
    element: <NotFoundPage />,
    title: "not found",
  },
];

export default pageData;
