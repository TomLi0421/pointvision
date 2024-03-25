import { useContext, useEffect } from "react";
import HorizontalLinearAlternativeLabelStepper from "../../components/ui/HorizontalLinearAlternativeLabelStepper";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function CheckoutSuccessPage() {
  const [checkoutSession] = useSearchParams();
  const { resetShoppingCart } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Checkout Success";
    isCheckoutSuccess();
  }, []);

  const isCheckoutSuccess = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/order/success",
        {
          params: {
            session_id: checkoutSession.get("session_id"),
          },
        }
      );

      if (response.status === 200) {
        resetShoppingCart();
      }
    } catch (error: any) {
      if (error.response && error.response.status === 500) {
        navigate("/");
      }
    }
  };

  return (
    <div className="mt-20">
      <HorizontalLinearAlternativeLabelStepper />
    </div>
  );
}

export default CheckoutSuccessPage;
