import { useContext } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function ShoppingCartItemList() {
  const { shoppingCartProduct } = useContext(ShoppingCartContext);

  return (
    <div className="mt-7">
      {shoppingCartProduct.map((product: any, index: number) => {
        return (
          <ShoppingCartItem
            key={index}
            productName={product.name}
            productQty={product.qty}
          />
        );
      })}
    </div>
  );
}

export default ShoppingCartItemList;
