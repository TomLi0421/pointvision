import { ReactNode, createContext, useState, useEffect } from "react";
import axios from "axios";

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext({
  products: [],
  isDataLoaded: false,
  currentPage: 1,
  handleChange: (event: any, value: number) => {},
});

export default function ProductProvider({ children }: ProductProviderProps) {
  const [products, setProducts] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 3;

  // get current products
  let indexOfLastProduct = currentPage * productPerPage;
  let indexOfFirstProduct = indexOfLastProduct - productPerPage;

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

  const handleChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);

    indexOfLastProduct = currentPage * productPerPage;
    indexOfFirstProduct = indexOfLastProduct - productPerPage;
    setProducts(products.slice(indexOfFirstProduct, indexOfLastProduct));
  };

  return (
    <ProductContext.Provider
      value={{
        products: products,
        isDataLoaded: isDataLoaded,
        currentPage: currentPage,
        handleChange: handleChange,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
