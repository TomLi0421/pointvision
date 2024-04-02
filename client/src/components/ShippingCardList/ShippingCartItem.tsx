import { useEffect, useState } from "react";
import ShippingItemDetail from "./ShippingItemDetail/ShippingItemDetail";
import axios from "axios";

function ShippingCartItem(props: any) {
  const [product, setProduct] = useState<any>([]);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);

  useEffect(() => {
    getProduct();
  }, [props.productName]);

  const getProduct = async () => {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/get-products/${props.productName}`
    );

    setProduct(response.data);
    setIsDataLoaded(true);
  };

  return (
    <div className="flex rounded shadow-md py-2.5 pl-2.5 pr-6 mb-6">
      {isDataLoaded && (
        <img
          className="object-contain w-[4.75rem] h-[4.75rem] rounded lg:w-20 lg:h-20"
          src={`https://d2j3uzrexrokpc.cloudfront.net/${product.type}/${product.imgName[0]}`}
          alt={product.name}
        />
      )}

      {isDataLoaded && (
        <ShippingItemDetail
          brand={product.brand}
          qty={props.productQty}
          price={product.price}
          name={product.name}
        />
      )}
    </div>
  );
}

export default ShippingCartItem;
