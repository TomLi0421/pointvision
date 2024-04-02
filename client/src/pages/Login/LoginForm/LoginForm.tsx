import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../../../components/ui/Button";
import InputBoxWithLabel from "../../../components/ui/InputBoxWithLabel";
import styles from "./LoginForm.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useContext } from "react";
import { LoggedinContext } from "../../../context/LoggedinContext";

const cookies = new Cookies();

type Inputs = {
  email: string;
  password: string;
};

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(LoggedinContext);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/user/login`,
        {
          user: data,
        }
      );

      if (response.status === 200) {
        cookies.set("token", response.data.token, {
          path: "/",
        });

        setIsLoggedIn(true);
        navigate("/purchase_history");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        toast.error(`${error.response.data.message}`, {
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
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputBoxWithLabel
        {...register("email", {
          required: "Please provide your email",
        })}
        className="mb-1"
        id="email"
        labeltext="Email"
        type="email"
        placeholder="Enter your email"
      />
      <p className="mb-5 text-red-500">{errors.email?.message}</p>

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
        placeholder="Enter your password"
      />
      <p className="mb-20 text-red-500">{errors.password?.message}</p>

      <Button
        className={`${styles.login_form__btn_bg_color} w-full text-white py-3.5 rounded-full shadow-lg`}
      >
        Login
      </Button>
      <ToastContainer />
    </form>
  );
}

export default LoginForm;
