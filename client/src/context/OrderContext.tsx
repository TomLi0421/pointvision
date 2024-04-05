import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
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
  // @ts-ignore
  handleSearch: (orderId: string) => {},
});

export default function OrderProvider({ children }: any) {
  const [order, setOrder] = useState<Order | null>(null);
  const [isOrderFound, setIsOrderFound] = useState(false);

  const handleSearch = async (orderId: string) => {
    try {
      if (orderId == "") {
        setIsOrderFound(false);
        toast.error("Please enter a valid order ID", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        return;
      }

      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/search/order`,
        {
          params: {
            orderId: orderId,
          },
        }
      );

      if (response.status === 200) {
        setOrder(response.data);
        setIsOrderFound(true);
      } else if (response.status === 404) {
        setIsOrderFound(false);
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
      }
    } catch (e: any) {
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
    </OrderContext.Provider>
  );
}
