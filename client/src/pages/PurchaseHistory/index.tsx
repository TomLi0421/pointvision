import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../components/ui/Button";
import styles from "./styles.module.css";
import { LoggedinContext } from "../../context/LoggedinContext";

const cookies = new Cookies();

function PurchaseHistoryPage() {
  const navigate = useNavigate();

  const { setIsLoggedIn } = useContext(LoggedinContext);

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
    <>
      <h1>Hello and welcome</h1>
      <Button
        className={`${styles.purchase_history__btn_bg_color} text-white px-20 py-2.5 rounded mt-14`}
        onClick={handleSignOut}
      >
        Sign Out
      </Button>
    </>
  );
}

export default PurchaseHistoryPage;
