import Button from "../../../components/ui/Button";
import InputBoxWithLabel from "../../../components/ui/InputBoxWithLabel";
import styles from "./RegisterForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

function RegisterForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="md:grid md:grid-cols-2 md:gap-x-3">
        <div>
          <InputBoxWithLabel
            {...register("firstName", {
              required: "Please provide your first name",
            })}
            className="mb-1"
            id="firstName"
            labeltext="First Name"
            type="text"
            placeholder="Enter your first name"
          />
          <p className="mb-5 text-red-500">{errors.firstName?.message}</p>
        </div>
        <div>
          <InputBoxWithLabel
            {...register("lastName", {
              required: "Please provide your last name",
            })}
            className="mb-1"
            id="lastName"
            labeltext="Last Name"
            type="text"
            placeholder="Enter your last name"
          />
          <p className="mb-5 text-red-500">{errors.lastName?.message}</p>
        </div>
      </div>

      <div>
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
        <p className="mb-5 text-red-500">{errors.email?.message}</p>
      </div>

      <div>
        <InputBoxWithLabel
          {...register("phone", {
            required: "Please provide your phone number",
            pattern: {
              value: /^[0-9]{8}$/,
              message: "Entered value does not match phone number format",
            },
          })}
          className="mb-1"
          id="phone-number"
          labeltext="Phone Number"
          type="tel"
          placeholder="Enter your phone number"
        />
        <p className="mb-5 text-red-500">{errors.phone?.message}</p>
      </div>

      <div>
        <InputBoxWithLabel
          {...register("address", {
            required: "Please provide your address",
          })}
          className="mb-1"
          id="address"
          labeltext="Address"
          type="text"
          name="address"
          placeholder="Enter your address"
        />
        <p className="mb-5 text-red-500">{errors.address?.message}</p>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-x-3">
        <div>
          <InputBoxWithLabel
            {...register("password", {
              required: "Please provide your password",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                message:
                  "Password must be at least 8 characters long, include at least one uppercase letter and one digit",
              },
            })}
            className="mb-1"
            id="password"
            labeltext="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
          />
          <p className="mb-5 text-red-500">{errors.password?.message}</p>
        </div>

        <div>
          <InputBoxWithLabel
            {...register("confirmPassword", {
              required: "Please provide your confirm password",
              validate: (value) =>
                value === getValues().password || "The passwords do not match",
            })}
            className="mb-1"
            id="confirm-password"
            labeltext="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
          />
          <p className="mb-20 text-red-500">
            {errors.confirmPassword?.message}
          </p>
        </div>
      </div>

      <Button
        className={`${styles.register_form__btn_bg_color} w-full text-white py-3.5 rounded-full shadow-lg`}
      >
        Login
      </Button>
    </form>
  );
}

export default RegisterForm;
