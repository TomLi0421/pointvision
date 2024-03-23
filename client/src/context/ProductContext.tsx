import { ReactNode, createContext, useState, useEffect } from "react";
import axios from "axios";

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext({
  products: [],
  isDataLoaded: false,
});

export default function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/get-all-product"
    );

    setProducts(response.data);
    setIsDataLoaded(true);
  };

  return (
    <ProductContext.Provider
      value={{
        products: products,
        isDataLoaded: isDataLoaded,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
