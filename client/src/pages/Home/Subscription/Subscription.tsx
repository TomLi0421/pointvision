import subBackground from "../../../assets/subscription_background.jpg";
import Button from "../../../components/ui/Button";
import InputBox from "../../../components/ui/InputBox";
import styles from "./Subscription.module.css";

export default function Subscription() {
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
          <InputBox
            className="py-3.5 pl-5 w-80 rounded mb-1 mx-auto xl:mr-1"
            type="email"
            placeholder="Your Email"
          />
          <Button
            className={`${styles.subscription__btn__bg_color} text-white py-3.5 w-80 rounded mb-1 mx-auto`}
          >
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
