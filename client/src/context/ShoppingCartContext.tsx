import { ReactNode, createContext, useState } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({
  shoppingCartQty: 0,
  shoppingCartProduct: [],
  updateShoppingCart: () => {},
});

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [shoppingCartQty, setShoppingCartQty] = useState(
    Number(localStorage.getItem("shoppingCartQty")) || 0
  );

  const [shoppingCartProduct, setShoppingCartProduct] = useState(
    JSON.parse(localStorage.getItem("shoppingCartProduct") || "[]")
  );

  const handleUpdateShoppingCart = () => {
    updateShoppingCartQty();
    updateShoppingCartProduct();
  };

  const updateShoppingCartQty = () => {
    setShoppingCartQty((prev) => {
      localStorage.setItem("shoppingCartQty", String(prev + 1));
      return prev + 1;
    });
  };

  const updateShoppingCartProduct = () => {
    const product = {
      name: "Meta Quest 2 Left Controller",
      qty: 5,
      price: 69.99,
    };
    setShoppingCartProduct((prev: []) => {
      localStorage.setItem(
        "shoppingCartProduct",
        JSON.stringify([...prev, product])
      );
      return [...prev, product];
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartQty: shoppingCartQty,
        shoppingCartProduct: shoppingCartProduct,
        updateShoppingCart: handleUpdateShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
