import InputBoxWithLabel from "../../../components/ui/InputBoxWithLabel";
import Button from "../../../components/ui/Button";
import styles from "./ShippingForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
// import { Country, State, City } from "country-state-city";

import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../context/ShoppingCartContext";
import { ShippingInfoContext } from "../../../context/ShippingInfoContext";

type Inputs = {
  email: string;
  country: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  region: string;
  zipCode: string;
  phone: string;
};

function ShippingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const { shoppingCartProduct } = useContext(ShoppingCartContext);
  const { updateShippingInfo } = useContext(ShippingInfoContext);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      updateShippingInfo(data);

      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
      const response = await axios.post(
        "http://localhost:3000/api/stripe/create-checkout-session",
        {
          shoppingCartProduct: shoppingCartProduct,
          shippingInfo: data,
        }
      );

      const session = await response.data;
      const result = await stripe!.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error: any) {}
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputBoxWithLabel
        {...register("email", {
          required: "Please provide your email",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Entered value does not match email format",
          },
        })}
        className="mb-1"
        id="email"
        labeltext="Email"
        type="email"
        placeholder="Enter your email"
      />
      <p className="mb-3 text-red-500">{errors.email?.message}</p>

      <h2 className="mb-4 font-bold">Shipping address</h2>

      <select
        {...register("country", {
          required: "Please select a country",
        })}
        defaultValue=""
        className={`${styles.checkout_form__selector__bg_color} ${styles.checkout_form__selector_text_color} mb-1 border py-3 pl-1 border-r-[1rem] outline-none w-full`}
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
      <p className="mb-3 text-red-500">{errors.country?.message}</p>

      <div className="md:grid md:grid-cols-2 md:gap-x-6">
        <div>
          <InputBoxWithLabel
            {...register("firstName", {
              required: "Please provide your first name",
            })}
            className="mb-1"
            id="first_name"
            labeltext="First Name"
            type="text"
            placeholder="Enter your first name"
          />
          <p className="mb-3 text-red-500">{errors.firstName?.message}</p>
        </div>

        <div>
          <InputBoxWithLabel
            {...register("lastName", {
              required: "Please provide your last name",
            })}
            className="mb-1"
            id="last_name"
            labeltext="Last Name"
            type="text"
            placeholder="Enter your last name"
          />
          <p className="mb-3 text-red-500">{errors.lastName?.message}</p>
        </div>
      </div>

      <InputBoxWithLabel
        {...register("address", {
          required: "Please provide your address",
        })}
        className="mb-1"
        id="address"
        labeltext="Address"
        type="text"
        placeholder="Enter your address"
      />
      <p className="mb-3 text-red-500">{errors.address?.message}</p>

      <div className="md:grid md:grid-cols-3 md:gap-x-6">
        <div>
          <InputBoxWithLabel
            {...register("city", {
              required: "Please provide your city",
            })}
            className="mb-1"
            id="city"
            labeltext="City"
            type="text"
            name="city"
            placeholder="City"
          />
          <p className="mb-3 text-red-500">{errors.city?.message}</p>
        </div>

        <div>
          <InputBoxWithLabel
            {...register("region", {
              required: "Please provide your region",
            })}
            className="mb-1"
            id="region"
            labeltext="Region"
            type="text"
            placeholder="Region"
          />
          <p className="mb-3 text-red-500">{errors.region?.message}</p>
        </div>

        <div>
          <InputBoxWithLabel
            {...register("zipCode", {
              required: "Please provide your zip code",
            })}
            className="mb-1"
            id="zip_code"
            labeltext="Zip code"
            type="text"
            placeholder="Zip code"
          />
          <p className="mb-3 text-red-500">{errors.zipCode?.message}</p>
        </div>
      </div>

      <InputBoxWithLabel
        {...register("phone", {
          required: "Please provide your phone number",
          pattern: {
            value: /^[0-9]{8}$/,
            message: "Entered value does not match phone number format",
          },
        })}
        className="mb-1"
        id="phone"
        labeltext="Phone"
        type="text"
        placeholder="Enter your phone number"
      />
      <p className="mb-20 text-red-500">{errors.phone?.message}</p>

      <Button
        className={`${styles.checkout_form__btn_bg_color} w-full text-white py-3.5 rounded-full shadow-lg`}
      >
        Checkout
      </Button>
    </form>
  );
}

export default ShippingForm;
