import InputBoxWithLabel from "../../../components/ui/InputBoxWithLabel";
import Button from "../../../components/ui/Button";
import styles from "./ShippingForm.module.css";
// import { Country, State, City } from "country-state-city";
import { useRef } from "react";
// import { ShoppingCartContext } from "../../context/ShoppingCartContext";
// import axios from "axios";
// import { loadStripe } from "@stripe/stripe-js";

function ShippingForm() {
  const inputRefs = useRef<{
    email: HTMLInputElement | null;
    firstName: HTMLInputElement | null;
    lastName: HTMLInputElement | null;
    country: HTMLSelectElement | null;
    address: HTMLInputElement | null;
    city: HTMLInputElement | null;
    region: HTMLInputElement | null;
    zipCode: HTMLInputElement | null;
    phone: HTMLInputElement | null;
  }>({
    email: null,
    firstName: null,
    lastName: null,
    country: null,
    address: null,
    city: null,
    region: null,
    zipCode: null,
    phone: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputRefs.current.email!.value);
    console.log(inputRefs.current.firstName!.value);
    console.log(inputRefs.current.lastName!.value);
    console.log(inputRefs.current.country!.value);
    console.log(inputRefs.current.address!.value);
    console.log(inputRefs.current.city!.value);
    console.log(inputRefs.current.region!.value);
    console.log(inputRefs.current.zipCode!.value);
    console.log(inputRefs.current.phone!.value);
  };

  //   const { shoppingCartProduct, totalPrice, calculateTotalPrice } =
  //     useContext(ShoppingCartContext);

  //   const handleCheckout = async () => {
  //     const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  //     const response = await axios.post(
  //       "http://localhost:3000/api/create-checkout-session",
  //       {
  //         products: shoppingCartProduct,
  //       }
  //     );
  //     if (response.status === 200) {
  //       const session = await response.data;
  //       const result = await stripe!.redirectToCheckout({
  //         sessionId: session.id,
  //       });
  //     }
  //   };
  return (
    <form onSubmit={handleSubmit}>
      <InputBoxWithLabel
        ref={(el) => (inputRefs.current.email = el as HTMLInputElement)}
        className="mb-4"
        id="email"
        labeltext="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
      />
      <h2 className="mb-4 font-bold">Shipping address</h2>

      <select
        ref={(el) => (inputRefs.current.country = el as HTMLSelectElement)}
        defaultValue=""
        className={`${styles.checkout_form__selector__bg_color} ${styles.checkout_form__selector_text_color} mb-4 border py-3 pl-1 border-r-[1rem] outline-none w-full`}
      >
        <option value="" disabled>
          Select a country
        </option>
        <option value="Hong Kong">Hong Kong SAR</option>
        {/* Add more countries here */}
        {/* {Country.getAllCountries().map((country) => (
          <option key={country.isoCode} value={country.isoCode}>
            {country.name}
          </option>
        ))} */}
      </select>

      <div className="md:grid md:grid-cols-2 md:gap-x-6">
        <InputBoxWithLabel
          ref={(el) => (inputRefs.current.firstName = el as HTMLInputElement)}
          className="mb-4"
          id="first_name"
          labeltext="First Name"
          type="text"
          name="firstName"
          placeholder="Enter your first name"
        />

        <InputBoxWithLabel
          ref={(el) => (inputRefs.current.lastName = el as HTMLInputElement)}
          className="mb-4"
          id="last_name"
          labeltext="Last Name"
          type="text"
          name="lastName"
          placeholder="Enter your last name"
        />
      </div>

      <InputBoxWithLabel
        ref={(el) => (inputRefs.current.address = el as HTMLInputElement)}
        className="mb-4"
        id="address"
        labeltext="Address"
        type="text"
        name="address"
        placeholder="Enter your address"
      />

      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <InputBoxWithLabel
          ref={(el) => (inputRefs.current.city = el as HTMLInputElement)}
          className="mb-4"
          id="city"
          labeltext="City"
          type="text"
          name="city"
          placeholder="City"
        />

        <InputBoxWithLabel
          ref={(el) => (inputRefs.current.region = el as HTMLInputElement)}
          className="mb-4"
          id="region"
          labeltext="Region"
          type="text"
          name="region"
          placeholder="Region"
        />

        <InputBoxWithLabel
          ref={(el) => (inputRefs.current.zipCode = el as HTMLInputElement)}
          className="mb-4"
          id="zip_code"
          labeltext="Zip code"
          type="text"
          name="zipCode"
          placeholder="Zip code"
        />
      </div>

      <InputBoxWithLabel
        ref={(el) => (inputRefs.current.phone = el as HTMLInputElement)}
        className="mb-24"
        id="phone"
        labeltext="Phone"
        type="text"
        name="phone"
        placeholder="Enter your phone number"
      />
      <Button
        className={`${styles.checkout_form__btn_bg_color} w-full text-white py-3.5 rounded-full shadow-lg`}
      >
        Checkout
      </Button>
    </form>
  );
}

export default ShippingForm;
