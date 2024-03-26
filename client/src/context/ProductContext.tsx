import { ReactNode, createContext, useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    try {
      const response = await axios.get(
        "http://localhost:3000/api/get-products/get-all-products"
      );

      if (response.status === 200) {
        setProducts(response.data);
        setIsDataLoaded(true);
      }
    } catch (e) {
      toast.error("Internal server error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: products,
        isDataLoaded: isDataLoaded,
      }}
    >
      {children}
      <ToastContainer />
    </ProductContext.Provider>
  );
}
