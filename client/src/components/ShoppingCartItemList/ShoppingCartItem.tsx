import { useEffect, useState } from "react";
import ShoppingCartItemDetail from "./ShoppingItemDetail/ShoppingCartItemDetail";
import axios from "axios";

function ShoppingCartItem(props: any) {
  const [product, setProduct] = useState<any>([]);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios.get(
      `http://localhost:3000/api/get-product/${props.productName}`
    );

    setProduct(response.data);
    setIsDataLoaded(true);
  };

  return (
    <div className="flex rounded shadow-md py-2.5 pl-2.5 pr-6 mb-6 md:flex h-full items-center">
      {isDataLoaded && (
        <img
          className="object-contain w-[4.75rem] h-[4.75rem] rounded lg:w-20 lg:h-20"
          src={`https://d2j3uzrexrokpc.cloudfront.net/${product.type}/${product.imgName}`}
          alt={product.name}
        />
      )}

      {isDataLoaded && (
        <ShoppingCartItemDetail
          brand={product.brand}
          qty={props.productQty}
          price={product.price}
          name={product.name}
        />
      )}
    </div>
  );
}

export default ShoppingCartItem;
