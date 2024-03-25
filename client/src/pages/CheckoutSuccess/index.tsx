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
import { ShippingInfoContext } from "../../context/ShippingInfoContext";

function CheckoutSuccessPage() {
  const [checkoutSession] = useSearchParams();
  const { resetShoppingCart } = useContext(ShoppingCartContext);

  const { shippingInfo } = useContext(ShippingInfoContext);
  const [billingInfo, setBillingInfo] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Checkout Success";
    isCheckoutSuccess();
  }, []);

  const isCheckoutSuccess = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/stripe/order/success",
        {
          params: {
            session_id: checkoutSession.get("session_id"),
          },
        }
      );

      if (response.status === 200) {
        // resetShoppingCart();
        setBillingInfo(response.data);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 500) {
        navigate("/");
      }
    }
  };

  // console.log(billingInfo.session);

  return (
    <div className="p-3 mt-14 md:max-w-[70rem] md:mx-auto">
      <HorizontalLinearAlternativeLabelStepper />
      <div className="mt-20 px-5 flex items-center mb-6 md:max-w-[35rem] md:mx-auto">
        <img className="w-16 mr-5" src={success} alt="success" />
        <div>
          <h1 className="text-lg font-medium">Thank You!</h1>
          <p className="font-normal text-base">
            Your order #BF12345 has been placed.
          </p>
        </div>
      </div>
      <div className="px-5 md:mx-auto md:max-w-[35rem]">
        <p className="mb-6">
          We send an email to
          <span className="font-medium">orders@banuelson.com</span> with your
          order confirmation and bill.
        </p>
        <p className="font-medium text-sm mb-6">
          Time placed: 17/02/2020 12:45 GMT
        </p>

        <CheckoutInfoCard
          title="Shipping"
          firstName={shippingInfo.firstName}
          lastName={shippingInfo.lastName}
          email={shippingInfo.email}
          phone={shippingInfo.phone}
          address={shippingInfo.address}
          region={shippingInfo.region}
          city={shippingInfo.city}
          country={shippingInfo.country}
          zipCode={shippingInfo.zipCode}
        />

        {/* {billingInfo.session && (
          <CheckoutInfoCard
            title="Billing"
            address={billingInfo.session.customer_details.address.line1}
          />
        )} */}

        <h2 className="font-medium text-base">Order Items</h2>
        <ShippingCardList />

        <Link to="/product">
          <Button
            className={`${styles.checkout_success__btn_bg_color} text-white rounded py-4 px-6 mt-6 w-full`}
          >
            Go to homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CheckoutSuccessPage;
