import { useContext, useEffect } from "react";
import ShippingCartItem from "./ShippingCartItem";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function ShippingCardList() {
  const { shoppingCartProduct, totalPrice, calculateTotalPrice } =
    useContext(ShoppingCartContext);

  useEffect(() => {
    calculateTotalPrice();
  }, [shoppingCartProduct]);

  return (
    <div className="mt-7">
      {shoppingCartProduct.map((product: any, index: number) => {
        return (
          <ShippingCartItem
            key={index}
            productName={product.name}
            productQty={product.qty}
          />
        );
      })}
      <div className="flex justify-between">
        <h5 className="text-lg font-normal">Shipping fees</h5>
        <p className="text-lg font-bold">${10}</p>
      </div>

      <div className="flex justify-between">
        <h5 className="text-lg font-normal">Total</h5>
        <p className="text-lg font-bold">${totalPrice}</p>
      </div>
    </div>
  );
}

export default ShippingCardList;
