import { useContext, useEffect, useState } from "react";
import HorizontalLinearAlternativeLabelStepper from "../../components/ui/HorizontalLinearAlternativeLabelStepper";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import success from "../../assets/success.png";
import CheckoutInfoCard from "../../components/CheckoutInfoCard/CheckoutInfoCard";
import ShippingCardList from "../../components/ShippingCardList/ShippingCardList";
import Button from "../../components/ui/Button";
import styles from "./styles.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ShippingInfo {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  items: [];
  amount: number;
  status: string;
}

interface BillingInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
}

function CheckoutSuccessPage() {
  const [checkoutSession] = useSearchParams();
  const { resetShoppingCart } = useContext(ShoppingCartContext);

  const [billingInfo, setBillingInfo] = useState<BillingInfo>();
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>();
  const [orderCreatedDate, setorderCreatedDate] = useState<string>("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Checkout Success";
    isCheckoutSuccess();
  }, []);

  useEffect(() => {
    getOrderCreatedDate();
  }, [shippingInfo]);

  const isCheckoutSuccess = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/api/stripe/order/success`,
        {
          params: {
            session_id: checkoutSession.get("session_id"),
          },
        }
      );

      if (response.status === 200) {
        resetShoppingCart();
        setShippingInfo(response.data.transactionInfo);

        let completedAddress = "";
        for (let key in response.data.billingInfo.address) {
          let value = response.data.billingInfo.address[key];
          if (value !== null) {
            completedAddress += value + " ";
          }
        }
        response.data.billingInfo.address = completedAddress;
        setBillingInfo(response.data.billingInfo);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 500) {
        navigate("/");
      }
    }
  };

  const getOrderCreatedDate = async () => {
    try {
      if (shippingInfo) {
        const response = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}/api/search/order`,
          {
            params: {
              orderId: shippingInfo.id,
            },
          }
        );

        if (response.status === 200) {
          setorderCreatedDate(response.data.createdAt);
        }
      }
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        toast.error("Error occur cannot show the order placed date", {
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
    }
  };

  return (
    <div className="p-3 mt-14 md:max-w-[70rem] md:mx-auto">
      {shippingInfo && (
        <HorizontalLinearAlternativeLabelStepper status={shippingInfo.status} />
      )}

      <div className="mt-20 px-5 flex items-center mb-6 md:max-w-[35rem] md:mx-auto">
        <img className="w-16 mr-5" src={success} alt="success" />
        <div>
          <h1 className="text-lg font-medium">Thank You!</h1>
          <p className="font-normal text-base">
            Your order #{shippingInfo && shippingInfo.id} has been placed.
          </p>
        </div>
      </div>
      <div className="px-5 md:mx-auto md:max-w-[35rem]">
        <p className="mb-6">
          We send an email to {""}
          <span className="font-medium">
            {shippingInfo && shippingInfo.email}
          </span>{" "}
          with your order confirmation and bill.
        </p>
        {orderCreatedDate && (
          <p className="font-medium text-sm mb-6">
            Time placed: {new Date(orderCreatedDate).toLocaleString()}
          </p>
        )}

        {shippingInfo && (
          <CheckoutInfoCard
            title="Shipping"
            firstName={shippingInfo.firstName}
            lastName={shippingInfo.lastName}
            email={shippingInfo.email}
            phone={`+852${shippingInfo.phone}`}
            address={shippingInfo.address}
          />
        )}

        {billingInfo && (
          <CheckoutInfoCard
            title="Billing"
            firstName={billingInfo.name}
            email={billingInfo.email}
            phone={billingInfo.phone}
            address={billingInfo.address}
          />
        )}

        <h2 className="font-medium text-base">Order Items</h2>
        {shippingInfo && (
          <ShippingCardList
            purchasedItems={shippingInfo.items}
            purchasedItemsAmount={shippingInfo.amount}
          />
        )}

        <Link to="/product">
          <Button
            className={`${styles.checkout_success__btn_bg_color} text-white rounded py-4 px-6 mt-6 w-full`}
          >
            Go to homepage
          </Button>
        </Link>
      </div>
      <ToastContainer />
    </div>
  );
}

export default CheckoutSuccessPage;
