import ShippingForm from "./ShippingForm/ShippingForm";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import ShippingCardList from "../../components/ShippingCardList/ShippingCardList";

function ShippingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PointVision - Shipping";
    const numberOfCartItem = localStorage.getItem("shoppingCartQty");

    if (numberOfCartItem == "0" || numberOfCartItem == null) {
      console.log("Your shopping cart is empty");
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
    <div className="p-6 md:py-32 md:max-w-[65rem] md:m-auto md:grid md:grid-cols-2 md:gap-x-6">
      <ShippingCardList />
      <ShippingForm />
    </div>
  );
}

export default ShippingPage;
