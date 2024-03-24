import { useEffect, useState } from "react";
import styles from "./ShippingItemDetail.module.css";

function ShippingItemDetail(props: any) {
  const [quantity] = useState(props.qty);
  const [totalPrice, setTotalPrice] = useState(
    Number((props.price * quantity).toFixed(2))
  );

  useEffect(() => {
    calculateTotalPrice(quantity);
  }, [quantity]);

  const calculateTotalPrice = (qty: number) => {
    const calculatedTotalPrice = Number((props.price * qty).toFixed(2));
    setTotalPrice(calculatedTotalPrice);
  };

  return (
    <div className="ml-5 w-full flex justify-between h-full items-center">
      <div>
        <h2
          className={`${styles.shipping_item__brand_text_color} font-medium text-base`}
        >
          {props.brand}
        </h2>
        <p
          className={`${styles.shipping_item__brand_text_color} font-normal text-sm mt-1 md:w-28`}
        >
          {props.name}
        </p>
      </div>

      <div className="text-center md:flex md:flex-col">
        <p className="mb-1">Qty: {quantity}</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
}

export default ShippingItemDetail;
