import { useContext } from "react";
import ProductCard from "./ProductCard/ProductCard";
import { ProductContext } from "../../context/ProductContext";
import styles from "./ProductCardList.module.css";

function ProductCardList(props: any) {
  let { products, isDataLoaded } = useContext(ProductContext);

  if (props.type) {
    products = products.filter((product: any) => {
      return product.type === props.type;
    });
  }

  return (
    <>
      <p
        className={`${styles.product_card_list__number_result_color} text-center font-bold mb-6`}
      >
        Showing all {products.length} results
      </p>

      <select
        className={`${styles.product_card_list__filter__bg_color} ${styles.product_card_list__filter_text_color} mb-24 border p-3 pl-5 border-r-[1.3rem] outline-none`}
      >
        <option value="low">Price: Low to High</option>
        <option value="high">Price: High to Low</option>
      </select>
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
    </>
  );
}

export default ProductCardList;
