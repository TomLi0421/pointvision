import Button from "../../../components/ui/Button";
import InputBoxWithLabel from "../../../components/ui/InputBoxWithLabel";
import styles from "./RegisterForm.module.css";

function RegisterForm() {
  return (
    <form action="#">
      <div className="md:grid md:grid-cols-2 md:gap-x-3">
        <InputBoxWithLabel
          className="mb-12"
          id="username"
          labeltext="Username"
          type="text"
          name="username"
          placeholder="Enter your username"
        />
        <InputBoxWithLabel
          className="mb-12"
          id="phone-number"
          labeltext="Phone Number"
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
        />
      </div>

      <InputBoxWithLabel
        className="mb-12"
        id="email"
        labeltext="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
      />

      <InputBoxWithLabel
        className="mb-12"
        id="address"
        labeltext="Address"
        type="text"
        name="address"
        placeholder="Enter your address"
      />

      <div className="md:grid md:grid-cols-2 md:gap-x-3">
        <InputBoxWithLabel
          className="mb-12"
          id="password"
          labeltext="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <InputBoxWithLabel
          className="mb-24"
          id="confirm-password"
          labeltext="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
        />
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
