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
  removeProduct: (product: { name: string; qty: number }) => {},
});

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [shoppingCartQty, setShoppingCartQty] = useState(
    Number(localStorage.getItem("shoppingCartQty")) || 0
  );

  const [shoppingCartProduct, setShoppingCartProduct] = useState(
    JSON.parse(localStorage.getItem("shoppingCartProducts") || "[]")
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
      localStorage.setItem("shoppingCartQty", String(prev + qty));
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
        localStorage.setItem("shoppingCartProducts", JSON.stringify(newCart));
        return newCart;
      } else {
        // The product doesn't exist in the cart
        const newCart = [...prev, product];
        localStorage.setItem("shoppingCartProducts", JSON.stringify(newCart));
        return newCart;
      }
    });
  };

  const removeProduct = (product: { name: string; qty: number }) => {
    const allProduct = JSON.parse(
      localStorage.getItem("shoppingCartProducts")!
    );
    const removedProduct = allProduct.filter(
      (p: any) => p.name !== product.name
    );

    setShoppingCartProduct(removedProduct);

    localStorage.setItem(
      "shoppingCartProducts",
      JSON.stringify(removedProduct)
    );

    setShoppingCartQty((prev) => {
      localStorage.setItem("shoppingCartQty", String(prev - product.qty));
      return prev - product.qty;
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartQty: shoppingCartQty,
        shoppingCartProduct: shoppingCartProduct,
        handleUpdateShoppingCart: handleUpdateShoppingCart,
        removeProduct: removeProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
