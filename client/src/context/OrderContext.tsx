import axios from "axios";
import { FormEvent, createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Order {
  id: string;
  status: string;
  items: [];
  amount: number;
  createdAt: string;
}

interface OrderContextType {
  order: Order | null;
  isOrderFound: boolean;
  handleSearch: (orderId: string) => void;
}

export const OrderContext = createContext<OrderContextType>({
  order: null,
  isOrderFound: false,
  handleSearch: (orderId: string) => {},
});

export default function OrderProvider({ children }: any) {
  const [order, setOrder] = useState<Order | null>(null);
  const [isOrderFound, setIsOrderFound] = useState(false);

  const handleSearch = async (orderId: string) => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/search/order",
        {
          params: {
            orderId: orderId,
          },
        }
      );

      if (response.status === 200) {
        setOrder(response.data);
        setIsOrderFound(true);
      }
    } catch (error: any) {
      if (error.response.status === 404) {
        toast.error("Order not found", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setIsOrderFound(false);
      }
    }
  };

  return (
    <OrderContext.Provider
      value={{
        order: order,
        isOrderFound: isOrderFound,
        handleSearch: handleSearch,
      }}
    >
      {children}
      <ToastContainer />
    </OrderContext.Provider>
  );
}
