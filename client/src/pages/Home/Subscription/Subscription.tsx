import { FormEvent, useRef, useState } from "react";
import subBackground from "../../../assets/subscription_background.jpg";
import Button from "../../../components/ui/Button";
import InputBox from "../../../components/ui/InputBox";
import styles from "./Subscription.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Subscription() {
  const inputRef = useRef<HTMLInputElement>();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();

    if (inputRef.current!.value && inputRef.current!.checkValidity()) {
      console.log("Subscribed with email: ", inputRef.current!.value);
      setErrorMessage("");
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/api/mailchimp/subscribe`,
          {
            email: inputRef.current!.value,
          }
        );

        if (response.status === 200) {
          toast.success("Subscribe successfully", {
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
      } catch (error) {
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
    } else {
      setErrorMessage("Please enter a valid email address.");
    }
  };

  return (
    <div className="relative py-6">
      <img
        className="object-cover w-full h-[414px]"
        src={subBackground}
        alt="subBackground"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 my-6"></div>
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="px-6 md:px-72">
          <h2 className="text-white font-bold text-4xl mb-2.5">
            Subscribe For Latest Discounts
          </h2>
          <p className="text-white mb-6 max-w-[800px] mx-auto">
            Subscribe to our email list to receive the latest discounts and
            promotions directly in your inbox. Stay updated and never miss a
            deal again!
          </p>
          <form action="">
            <InputBox
              ref={inputRef}
              className="py-3.5 pl-5 w-80 rounded mb-1 mx-auto xl:mr-1"
              type="email"
              placeholder="Your Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
            {errorMessage && (
              <p className="text-red-600 font-semibold">{errorMessage}</p>
            )}
            <Button
              className={`${styles.subscription__btn__bg_color} text-white py-3.5 w-80 rounded mb-1 mx-auto`}
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}
