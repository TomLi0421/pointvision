import { useState } from "react";
import QtyInput from "../../ui/QtyInput/QtyInput";
import styles from "./ShoppingCartItemDetail.module.css";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

function ShoppingCartItemDetail(props: any) {
  const [quantity, setQuantity] = useState(props.qty);
  const [totalPrice, setTotalPrice] = useState(
    Number((props.price * quantity).toFixed(2))
  );

  const handleInputQty = (e: any) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleIncreaseQty = () => {
    setQuantity((prev: number) => {
      const newQuantity = prev + 1;
      calculateTotalPrice(newQuantity);
      return newQuantity;
    });
  };

  const handleDecreaseQty = () => {
    setQuantity((prev: number) => {
      if (prev > 1) {
        const newQuantity = prev - 1;
        calculateTotalPrice(newQuantity);
        return newQuantity;
      }
      return prev;
    });
  };

  const calculateTotalPrice = (qty: number) => {
    const calculatedTotalPrice = Number((props.price * qty).toFixed(2));
    setTotalPrice(calculatedTotalPrice);
  };

  return (
    <div className="ml-5 w-full flex justify-between h-full items-center">
      <div>
        <h2
          className={`${styles.shopping_cart_item__brand_text_color} font-medium text-base`}
        >
          {props.brand}
        </h2>
        <p
          className={`${styles.shopping_cart_item__brand_text_color} font-normal text-sm mt-1 md:w-28`}
        >
          {props.name}
        </p>
        <QtyInput
          className="mt-1 md:hidden"
          quantity={quantity}
          handleIncreaseQty={handleIncreaseQty}
          handleDecreaseQty={handleDecreaseQty}
          handleInputQty={handleInputQty}
        />
      </div>

      <QtyInput
        className="mt-1 hidden md:block"
        quantity={quantity}
        handleIncreaseQty={handleIncreaseQty}
        handleDecreaseQty={handleDecreaseQty}
        handleInputQty={handleInputQty}
      />

      <div className="text-center md:flex ">
        <p className="mb-1 md:mr-1 md:mb-0">${totalPrice}</p>
        <button>
          <DeleteOutlineRoundedIcon />
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartItemDetail;
