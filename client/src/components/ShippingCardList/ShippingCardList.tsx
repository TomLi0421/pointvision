import { useContext } from "react";
import ShippingCartItem from "./ShippingCartItem";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function ShippingCardList() {
  const { shoppingCartProduct } = useContext(ShoppingCartContext);

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
    </div>
  );
}

export default ShippingCardList;
