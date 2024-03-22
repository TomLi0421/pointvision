import { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import ShoppingCartItemList from "../../components/ShoppingCartItemList/ShoppingCartItemList";
import Button from "../../components/ui/Button";

function ShoppingCartPage() {
  const { shoppingCartProduct } = useContext(ShoppingCartContext);

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
      <Button
        className={`${styles.shopping_cart__btn_bg_color} text-white px-20 py-2.5 rounded mt-8 w-full`}
      >
        Checkout
      </Button>
    </div>
  );
}

export default ShoppingCartPage;
