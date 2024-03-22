import { useContext, useState } from "react";
import Button from "../ui/Button";
import styles from "./ProductDescription.module.css";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import QtyInput from "../ui/QtyInput/QtyInput";

function ProductDescription(props: any) {
  const { handleUpdateShoppingCart } = useContext(ShoppingCartContext);
  const [quantity, setQuantity] = useState(1);

  const handleInputQty = (e: any) => {
    const newQuantity = Number(e.target.value);
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleIncreaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <div className="py-3 px-6">
      <h4 className="text-xl font-normal">{props.name}</h4>
      <p className="mt-5 font-bold text-2xl">{`\$${props.price}`}</p>
      <h6
        className={`${styles.product_description__available_text_color} font-bold text-sm mt-1.5`}
      >
        Availability:{" "}
        <span className={`${styles.product_description__in_stock_text_color}`}>
          In Stock
        </span>
      </h6>
      <p
        className={`${styles.product_description__text_color} mt-8 text-sm font-normal`}
      >
        {props.description}
      </p>
      <p
        className={`${styles.product_description__line_color} border mt-4`}
      ></p>
      <div className="mt-4">
        <QtyInput
          quantity={quantity}
          handleIncreaseQty={handleIncreaseQty}
          handleDecreaseQty={handleDecreaseQty}
          handleInputQty={handleInputQty}
        />
      </div>
      <Button
        className={`${styles.product_description__btn_bg_color} text-white px-20 py-2.5 rounded mt-14`}
        onClick={() =>
          handleUpdateShoppingCart({
            name: props.name,
            brand: props.brand,
            type: props.type,
            price: props.price,
            qty: quantity,
          })
        }
      >
        Buy
      </Button>
    </div>
  );
}

export default ProductDescription;
