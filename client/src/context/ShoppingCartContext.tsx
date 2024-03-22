import { ReactNode, createContext, useState, useEffect } from "react";

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({
  shoppingCartQty: 0,
  updateShoppingCartQty: () => {},
});

export default function ShoppingCartProvider({
  children,
}: ShoppingCartProviderProps) {
  const [shoppingCartQty, setShoppingCartQty] = useState(
    Number(localStorage.getItem("shoppingCartQty")) || 0
  );

  const handleUpdateShoppingCartQty = () => {
    setShoppingCartQty((prev) => {
      localStorage.setItem("shoppingCartQty", String(prev + 1));
      return prev + 1;
    });
  };

  // save shopping cart quantity to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("shoppingCartQty", String(shoppingCartQty));
  }, [shoppingCartQty]);

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCartQty: shoppingCartQty,
        updateShoppingCartQty: handleUpdateShoppingCartQty,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
