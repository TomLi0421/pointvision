import Button from "../ui/Button";
import styles from "./ProductDescription.module.css";

function ProductDescription(props: any) {
  return (
    <div className="py-3 px-6">
      <h4 className="text-xl font-normal">{props.name}</h4>
      <p className="mt-5 font-bold text-2xl">{`\$${props.price}`}</p>
      <h6
        className={`${styles.product_description__available_text_color} font-bold text-sm mt-1.5`}
      >
        Availability:{" "}
        <span className={`${styles.product_description__in_stock_text_color}`}>
          In Stock
        </span>
      </h6>
      <p className="mt-8 text-sm font-normal">{props.description}</p>
      <p
        className={`${styles.product_description__line_color} border mt-4`}
      ></p>
      <Button
        className={`${styles.product_description__btn_bg_color} text-white px-20 py-2.5 rounded mt-14`}
      >
        Buy
      </Button>
    </div>
  );
}

export default ProductDescription;
