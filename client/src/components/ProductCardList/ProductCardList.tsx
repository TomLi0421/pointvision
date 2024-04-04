import { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { ProductContext } from "../../context/ProductContext";
import styles from "./ProductCardList.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function ProductCardList(props: any) {
  let { products, isDataLoaded, getProducts } = useContext(ProductContext);
  const [sortMethod, setSortMethod] = useState("low");

  useEffect(() => {
    getProducts();
  }, []);

  if (props.type) {
    products = products.filter((product: any) => {
      return product.type === props.type;
    });
  }

  const sortedProducts = [...products].sort(
    (a: { price: number }, b: { price: number }) => {
      if (sortMethod === "low") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    }
  );

  return (
    <>
      <p
        className={`${styles.product_card_list__number_result_color} text-center font-bold mb-6`}
      >
        Showing all {products.length} results
      </p>

      <select
        className={`${styles.product_card_list__filter__bg_color} ${styles.product_card_list__filter_text_color} mb-24 border p-3 pl-5 border-r-[1.3rem] outline-none`}
        value={sortMethod}
        onChange={(e) => setSortMethod(e.target.value)}
      >
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {isDataLoaded ? (
          sortedProducts.map((product: any) => {
            return (
              <ProductCard
                key={product._id}
                id={product._id}
                name={product.name}
                type={product.type}
                img={product.imgName[0]}
                brand={product.brand}
                price={product.price}
              />
            );
          })
        ) : (
          <div className="col-span-3">
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          </div>
        )}
      </div>
    </>
  );
}

export default ProductCardList;
