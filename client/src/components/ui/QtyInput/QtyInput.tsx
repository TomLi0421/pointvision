import Button from "../Button";
import styles from "./QtyInput.module.css";
import InputBox from "../InputBox";

function QtyInput(props: any) {
  return (
    <div {...props}>
      <Button
        className={`${styles.product_description_qty_btn} px-2.5 rounded mr-1`}
        onClick={props.handleDecreaseQty}
      >
        -
      </Button>
      <InputBox
        type="number"
        className="w-10 text-center outline-none rounded"
        placeholder="Quantity"
        value={props.quantity}
        onChange={props.handleInputQty}
        readOnly
      />
      <Button
        className={`${styles.product_description_qty_btn} px-2.5 rounded ml-1`}
        onClick={props.handleIncreaseQty}
      >
        +
      </Button>
    </div>
  );
}

export default QtyInput;
