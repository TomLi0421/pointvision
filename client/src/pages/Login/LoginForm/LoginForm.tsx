import Button from "../../../components/ui/Button";
import InputBoxWithLabel from "../../../components/ui/InputBoxWithLabel";
import styles from "./LoginForm.module.css";

function LoginForm() {
  return (
    <form action="#" className="">
      <InputBoxWithLabel
        className="mb-12"
        id="email"
        labeltext="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
      />
      <InputBoxWithLabel
        className="mb-24"
        id="password"
        labeltext="Password"
        type="password"
        name="password"
        placeholder="Enter your password"
      />
      <Button
        className={`${styles.login_form__btn_bg_color} w-full text-white py-3.5 rounded-full shadow-lg`}
      >
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
