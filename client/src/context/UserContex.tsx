import axios from "axios";
import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";

const cookies = new Cookies();

interface UserData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  region: string;
  zipCode: string;
  phone: string;
}

interface PurchaseHistory {
  id: string;
  status: string;
  createdAt: Date;
}

interface UserContextType {
  userData: UserData | undefined;
  purchaseHistory: PurchaseHistory[];
  handleUserData: () => void;
  handlePurchaseHistory: () => void;
}

export const UserContext = createContext<UserContextType>({
  userData: undefined,
  purchaseHistory: [],
  handleUserData: () => {},
  handlePurchaseHistory: () => {},
});

export default function UserProvider({ children }: any) {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);
  const [purchaseHistory, setPurchaseHistory] = useState<PurchaseHistory[]>([]);

  const handleUserData = async () => {
    try {
      const token = cookies.get("token");

      const response = await axios.get(
        "http://localhost:3000/api/user/get-personal-data",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUserData(response.data);
      } else if (response.status === 404) {
        toast.error(response.data.message, {
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
      toast.error("Internal server error", {
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

  const handlePurchaseHistory = async () => {
    try {
      const token = cookies.get("token");

      const response = await axios.get(
        "http://localhost:3000/api/user/purchase-history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setPurchaseHistory(response.data.response);
      } else if (response.status === 404) {
        console.log(response.data.message);
      }
    } catch (e: any) {
      toast.error("Internal server error", {
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
    <UserContext.Provider
      value={{
        userData: userData,
        purchaseHistory: purchaseHistory,
        handleUserData: handleUserData,
        handlePurchaseHistory: handlePurchaseHistory,
      }}
    >
      {children}
      <ToastContainer />
    </UserContext.Provider>
  );
}
