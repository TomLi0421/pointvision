import HomePage from "./Home";
import LoginPage from "./Login";
import NotFoundPage from "./NotFound";
import ProductPage from "./Product";
import ProductDetailPage from "./ProductDetail";
import RegisterPage from "./Register";
import ShoppingCartPage from "./ShoppingCart";
import TypeOfProductPage from "./TypeOfProduct";
import { routerType } from "./types/router.types";
import ShippingPage from "./Shipping";
import PurchaseHistoryPage from "./PurchaseHistory";
import CheckoutSuccessPage from "./CheckoutSuccess";
import CheckoutFailPage from "./CheckoutFail";
import SearchingOrderPage from "./SearchingOrder";

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
    path: "/order_search",
    element: <SearchingOrderPage />,
    title: "order search",
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
    path: "purchase_history",
    element: <PurchaseHistoryPage />,
    title: "purchase history",
  },
  {
    path: "shopping_cart",
    element: <ShoppingCartPage />,
    title: "shopping cart",
  },
  {
    path: "shopping_cart/shipping",
    element: <ShippingPage />,
    title: "shipping",
  },
  {
    path: "shopping_cart/shipping/checkout_success",
    element: <CheckoutSuccessPage />,
    title: "checkout success",
  },
  {
    path: "shopping_cart/shipping/checkout_fail",
    element: <CheckoutFailPage />,
    title: "checkout fail",
  },
  {
    path: "*",
    element: <NotFoundPage />,
    title: "not found",
  },
];

export default pageData;
