import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard(props: any, key: string) {
  return (
    <Link
      to={`/product/${props.type.toLowerCase()}/${props.name.replace(
        /\s/g,
        "_"
      )}`}
    >
      <div
        key={key}
        className="flex flex-col items-center border shadow-lg rounded p-6 max-h-[39rem]"
      >
        <img
          className="object-contain mb-6 h-[27rem]"
          src={`https://d2j3uzrexrokpc.cloudfront.net/${props.type}/${props.img}`}
          alt={props.name}
        />
        <h5 className="font-bold text-base mb-2.5 text-center">{props.name}</h5>
        <p
          className={`${styles.product_card__brand_name__color} font-bold text-sm mb-2.5`}
        >
          {props.brand}
        </p>
        <h5
          className={`${styles.product_card__price_tag__color} font-bold text-base mb-9`}
        >
          {`\$${props.price}`}
        </h5>
      </div>
    </Link>
  );
}

export default ProductCard;
