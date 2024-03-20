import ProductCard from "./ProductCard/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  [key: string]: any;
}

function ProductCardList() {
  const [products, setProducts] = useState<Product>({});
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
    <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {isDataLoaded ? (
        products.map((product: any) => {
          return (
            <ProductCard
              key={product._id}
              name={product.name}
              type={product.type}
              img={product.imgName[0]}
              brand={product.brand}
              price={product.price}
            />
          );
        })
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default ProductCardList;
