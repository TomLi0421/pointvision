import { ReactNode, createContext, useState } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({
  shoppingCartQty: 0,
  shoppingCartProduct: [],
  handleUpdateShoppingCart: (product: {
    name: string;
    brand: string;
    type: string;
    qty: number;
    price: number;
  }) => {},
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

  const handleUpdateShoppingCart = (product: {
    name: string;
    brand: string;
    type: string;
    qty: number;
    price: number;
  }) => {
    updateShoppingCartQty(product.qty);
    updateShoppingCartProduct(product);
  };

  const updateShoppingCartQty = (qty: number) => {
    setShoppingCartQty((prev) => {
      localStorage.setItem("shoppingCartQty", String(prev + 1));
      return prev + qty;
    });
  };

  const updateShoppingCartProduct = (product: {
    name: string;
    brand: string;
    type: string;
    qty: number;
    price: number;
  }) => {
    setShoppingCartProduct((prev: any[]) => {
      const existingProductIndex = prev.findIndex(
        (p) => p.name === product.name
      );

      if (existingProductIndex !== -1) {
        // The product already exists in the cart
        const newCart = [...prev];
        newCart[existingProductIndex].qty += product.qty;
        localStorage.setItem("shoppingCartProduct", JSON.stringify(newCart));
        return newCart;
      } else {
        // The product doesn't exist in the cart
        const newCart = [...prev, product];
        localStorage.setItem("shoppingCartProduct", JSON.stringify(newCart));
        return newCart;
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartQty: shoppingCartQty,
        shoppingCartProduct: shoppingCartProduct,
        handleUpdateShoppingCart: handleUpdateShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
