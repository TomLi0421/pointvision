import QtyInput from "../../ui/QtyInput/QtyInput";
import styles from "./ShoppingCartItemDetail.module.css";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";

function ShoppingCartItemDetail() {
  return (
    <div className="ml-5 w-full flex justify-between h-full items-center">
      <div>
        <h2
          className={`${styles.shopping_cart_item__brand_text_color} font-medium text-base`}
        >
          Brand
        </h2>
        <p
          className={`${styles.shopping_cart_item__brand_text_color} font-normal text-sm mt-1`}
        >
          Product name
        </p>
        <QtyInput className="mt-1 md:hidden" />
      </div>

      <QtyInput className="mt-1 hidden md:block" />

      <div className="text-center md:flex ">
        <p className="mb-1 md:mr-1 md:mb-0">$100</p>
        <button>
          <DeleteOutlineRoundedIcon />
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartItemDetail;
