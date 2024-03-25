import { Link } from "react-router-dom";
import crossImg from "../../assets/cross.png";
import Button from "../../components/ui/Button";
import styles from "./styles.module.css";

function CheckoutFailPage() {
  return (
    <div className="flex flex-col items-center p-6">
      <img className="w-60 mb-8" src={crossImg} alt="Checkout unsuccessful" />
      <h1 className="text-2xl font-bold mb-8">Checkout Unsuccessful</h1>
      <Link to="/">
        <Button
          className={`${styles.checkout_fail__home_btn} text-white rounded py-4 px-6 mb-1 md:mr-1 md:mb-0`}
        >
          Go to homepage
        </Button>
      </Link>
    </div>
  );
}

export default CheckoutFailPage;
