import { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { OrderContext } from "../../context/OrderContext";
import OrderTracker from "../../components/OrderTracker/OrderTracker";

const cookies = new Cookies();

function OrderDetailPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const { order, handleSearch } = useContext(OrderContext);

  useEffect(() => {
    document.title = "PointVision - Purchase History";

    // get cookie from browser if logged in
    const token = cookies.get("token");

    if (!token) {
      toast.error("You are not logged in", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/login");
    } else {
      handleSearch(orderId!);
    }
  }, []);

  return (
    <div className="py-12">
      <div className="md:max-w-[45rem] md:mx-auto">
        <OrderTracker />
      </div>
      <ToastContainer />
    </div>
  );
}

export default OrderDetailPage;
