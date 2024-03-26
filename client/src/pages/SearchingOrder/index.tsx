import { useContext, useEffect, useRef } from "react";
import Button from "../../components/ui/Button";
import InputBox from "../../components/ui/InputBox";
import styles from "./styles.module.css";
import OrderTracker from "../../components/OrderTracker/OrderTracker";
import { OrderContext } from "../../context/OrderContext";

function SearchingOrderPage() {
  const { isOrderFound, handleSearch } = useContext(OrderContext);
  const inputRef = useRef<HTMLInputElement>();

  useEffect(() => {
    document.title = "PointVision - Search Order";
  }, []);

  return (
    <>
      <div className="px-12 mb-12 md:max-w-[38rem] md:mx-auto">
        <h1
          className={`${styles.search_order__title} font-bold text-5xl text-center mt-12 mb-8`}
        >
          Find Your Order Details
        </h1>
        <p
          className={`${styles.search_order__description} text-sm font-normal text-center mb-7`}
        >
          Quickly find your order details by entering your order number. Check
          the status, track shipments, and stay updated on your purchase
          progress. Retrieve your order details effortlessly with our convenient
          lookup tool.
        </p>
        <form>
          <InputBox
            ref={inputRef}
            className={`${styles.search_order__input} w-full h-14 pl-5 rounded mb-1`}
            type="text"
            placeholder="Enter your order number"
          />
          <Button
            className={`${styles.search_order__btn} w-full h-14 rounded`}
            onClick={(e) => handleSearch(inputRef.current!.value, e)}
          >
            Search
          </Button>
        </form>
      </div>
      {isOrderFound && (
        <div className="md:max-w-[45rem] md:mx-auto">
          <OrderTracker />
        </div>
      )}
    </>
  );
}

export default SearchingOrderPage;
