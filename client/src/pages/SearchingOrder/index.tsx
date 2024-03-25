import { useRef, useState } from "react";
import Button from "../../components/ui/Button";
import InputBox from "../../components/ui/InputBox";
import styles from "./styles.module.css";
import axios from "axios";
import HorizontalLinearAlternativeLabelStepper from "../../components/ui/HorizontalLinearAlternativeLabelStepper";

interface Order {
  status?: string;
}

function SearchingOrderPage() {
  const inputRef = useRef<HTMLInputElement>();

  const [order, setOrder] = useState<Order>({});
  const [isOrderFound, setIsOrderFound] = useState(false);

  const handleSearch = async () => {
    try {
      if (inputRef.current) {
        const response = await axios.get(
          "http://localhost:3000/api/search/order",
          {
            params: {
              orderId: inputRef.current.value,
            },
          }
        );

        if (response.status === 200) {
          setOrder(response.data);
          setIsOrderFound(true);
          console.log(response.data);
        }
      }
    } catch (error: any) {
      if (error.response.status === 404) {
        setIsOrderFound(false);
      }
    }
  };

  return (
    <>
      <div className="px-12 mb-12 md:max-w-[38rem] md:mx-auto ">
        <h1
          className={`${styles.search_order__title} font-bold text-5xl text-center mt-12 mb-8`}
        >
          Designing Better Experience
        </h1>
        <p
          className={`${styles.search_order__description} text-sm font-normal text-center mb-7`}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <InputBox
          ref={inputRef}
          className={`${styles.search_order__input} w-full h-14 pl-5 rounded mb-1`}
          type="text"
          placeholder="Enter your order number"
        />
        <Button
          className={`${styles.search_order__btn} w-full h-14 rounded`}
          onClick={handleSearch}
        >
          Search
        </Button>
      </div>
      <div>
        {isOrderFound && (
          <HorizontalLinearAlternativeLabelStepper status={order.status} />
        )}
      </div>
    </>
  );
}

export default SearchingOrderPage;
