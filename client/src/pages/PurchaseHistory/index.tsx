import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/ui/Button";
import styles from "./styles.module.css";
import { LoggedinContext } from "../../context/LoggedinContext";
import PurchaseHistoryList from "../../components/PurchaseHistoryList/PurchaseHistoryList";

const cookies = new Cookies();

function PurchaseHistoryPage() {
  const navigate = useNavigate();

  const { setIsLoggedIn } = useContext(LoggedinContext);
  const [status, setStatus] = useState("all");
  const [selectedFilter, setSelectedFilter] = useState("All order");

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
    }
  }, []);

  const handleSignOut = () => {
    cookies.remove("token", { path: "/" });
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="p-6 md:my-16 md:max-w-[35rem] mx-auto">
      <h1 className="text-3xl font-extrabold mb-9 text-center">
        Purchase History
      </h1>
      <div className="flex gap-x-5 justify-center mb-7">
        <p
          className={`${styles.purchase__filter_order_text_color} ${
            selectedFilter === "All order" &&
            styles.purchase__filter_order_text_color_selected
          } font-medium text-lg hover:cursor-pointer `}
          onClick={() => {
            setSelectedFilter("All order");
            setStatus("All order");
          }}
        >
          All order
        </p>
        <p
          className={`${styles.purchase__filter_order_text_color} ${
            selectedFilter === "Processing" &&
            styles.purchase__filter_order_text_color_selected
          } font-medium text-lg hover:cursor-pointer`}
          onClick={() => {
            setSelectedFilter("Processing");
            setStatus("Processing");
          }}
        >
          Processing
        </p>
        <p
          className={`${styles.purchase__filter_order_text_color} ${
            selectedFilter === "Delivered" &&
            styles.purchase__filter_order_text_color_selected
          } font-medium text-lg hover:cursor-pointer`}
          onClick={() => {
            setSelectedFilter("Delivered");
            setStatus("Delivered");
          }}
        >
          Completed
        </p>
      </div>
      <PurchaseHistoryList status={status} />
      <div className="flex justify-center items-center">
        <Button
          className={`${styles.purchase_history__btn_bg_color} text-white px-20 py-2.5 rounded mt-14`}
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default PurchaseHistoryPage;
