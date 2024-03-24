import ShippingForm from "./ShippingForm/ShippingForm";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ShippingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PointVision - Shipping";
    const numberOfCartItem = localStorage.getItem("shoppingCartQty");

    if (!numberOfCartItem) {
      navigate("/shopping_cart");
      toast.error("Your shopping cart is empty", {
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
  }, []);

  return (
    <div className="p-6 md:py-32 md:max-w-[34rem] md:m-auto">
      <ShippingForm />
    </div>
  );
}

export default ShippingPage;
