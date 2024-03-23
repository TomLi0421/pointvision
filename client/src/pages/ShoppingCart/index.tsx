import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import ShoppingCartItemList from "../../components/ShoppingCartItemList/ShoppingCartItemList";
import Button from "../../components/ui/Button";
import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";

function ShoppingCartPage() {
  const { shoppingCartProduct, totalPrice, calculateTotalPrice } =
    useContext(ShoppingCartContext);

  const handleCheckout = async () => {
    // const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
    // const response = await axios.post(
    //   "http://localhost:3000/api/create-checkout-session",
    //   {
    //     products: shoppingCartProduct,
    //   }
    // );
    // if (response.status === 200) {
    //   const session = await response.data;
    //   const result = await stripe!.redirectToCheckout({
    //     sessionId: session.id,
    //   });
    // }
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [shoppingCartProduct]);

  return (
    <div className="p-6 md:py-32 md:max-w-[38rem] md:m-auto">
      <Link
        to="/product"
        className={`${styles.shopping_cart__text_color} font-semibold text-lg`}
      >
        <ArrowBackIosIcon />
        <span>Shopping Continue</span>
      </Link>
      <p className={`${styles.shopping_cart__line_color} border mt-6`}></p>
      <h1
        className={`${styles.shopping_cart__text_color} mt-6 font-medium text-lg`}
      >
        Shopping cart
      </h1>
      <p className={`${styles.shopping_cart__text_color}`}>
        You have {shoppingCartProduct.length} item in your cart
      </p>
      <ShoppingCartItemList />
      <div className="flex justify-between">
        <h5 className="text-lg font-normal">Total</h5>
        <p className="text-lg font-bold">${totalPrice}</p>
      </div>
      <Button
        className={`${styles.shopping_cart__btn_bg_color} text-white px-20 py-2.5 rounded mt-8 w-full`}
        onClick={handleCheckout}
      >
        Checkout
      </Button>
    </div>
  );
}

export default ShoppingCartPage;
