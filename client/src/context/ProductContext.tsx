import { ReactNode, createContext, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ProductProviderProps {
  children: ReactNode;
}

interface Product {
  imgName: never[];
  type: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  compatible: string;
  weight: string;
  color: string;
}

export const ProductContext = createContext({
  products: [],
  product: {
    imgName: [],
    type: "",
    name: "",
    brand: "",
    price: 0,
    description: "",
    compatible: "",
    weight: "",
    color: "",
  },
  isDataLoaded: false,
  getProducts: () => {},
  // @ts-ignore
  getProductByName: (productName: string) => {},
});

export default function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>({
    imgName: [],
    type: "",
    name: "",
    brand: "",
    price: 0,
    description: "",
    compatible: "",
    weight: "",
    color: "",
  });

  const getProducts = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/get-products/get-all-products`
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

  const getProductByName = async (productName: string) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/get-products/${productName}`
      );

      if (response.status === 200) {
        setProduct(response.data);
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
        product: product,
        isDataLoaded: isDataLoaded,
        getProducts: getProducts,
        getProductByName: getProductByName,
      }}
    >
      {children}
      <ToastContainer />
    </ProductContext.Provider>
  );
}
