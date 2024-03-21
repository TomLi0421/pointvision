import { useState } from "react";
import Button from "../ui/Button";
import InputBox from "../ui/InputBox";
import styles from "./ProductDescription.module.css";

function ProductDescription(props: any) {
  const [quantity, setQuantity] = useState(1);

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
        <Button
          className={`${styles.product_description_qty_btn} px-2.5 rounded mr-1`}
          onClick={() => {
            if (quantity > 1) setQuantity((prev) => prev - 1);
          }}
        >
          -
        </Button>
        <InputBox
          type="number"
          className="w-10 text-center"
          placeholder="Quantity"
          value={quantity}
          onChange={(e: any) => {
            const newQuantity = Number(e.target.value);
            if (newQuantity >= 1) {
              setQuantity(newQuantity);
            }
          }}
        />
        <Button
          className={`${styles.product_description_qty_btn} px-2.5 rounded ml-1`}
          onClick={() => setQuantity((prev) => prev + 1)}
        >
          +
        </Button>
      </div>
      <Button
        className={`${styles.product_description__btn_bg_color} text-white px-20 py-2.5 rounded mt-14`}
        onClick={props.handleUpdateShoppingCartQty}
      >
        Buy
      </Button>
    </div>
  );
}

export default ProductDescription;
