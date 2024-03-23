import { useContext, useEffect, useState } from "react";
import QtyInput from "../../ui/QtyInput/QtyInput";
import styles from "./ShoppingCartItemDetail.module.css";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";

function ShoppingCartItemDetail(props: any) {
  const [quantity, setQuantity] = useState(props.qty);
  const [totalPrice, setTotalPrice] = useState(
    Number((props.price * quantity).toFixed(2))
  );

  const { removeProduct, storeProductQty } = useContext(ShoppingCartContext);

  useEffect(() => {
    calculateTotalPrice(quantity);
  }, [quantity]);

  const handleInputQty = (e: any) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleIncreaseQty = () => {
    setQuantity((prev: number) => {
      return prev + 1;
    });

    storeProductQty(props.name, "add");
  };

  const handleDecreaseQty = () => {
    setQuantity((prev: number) => {
      if (prev > 1) {
        return quantity - 1;
      }
      return prev;
    });

    if (quantity > 1) {
      storeProductQty(props.name, "subtract");
    }
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

      <div className="text-center md:flex">
        <p className="mb-1 md:mr-1 md:mb-0">${totalPrice}</p>
        <button onClick={() => removeProduct(props)}>
          <DeleteOutlineRoundedIcon />
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartItemDetail;
