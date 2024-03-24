import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm";
import styles from "./styles.module.css";
import { useEffect } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = "PointVision - Login";

    // get cookie from browser if logged in
    const token = cookies.get("token");
    if (token) {
      navigate("/purchase_history");
    }
  }, []);

  return (
    <div className="p-6 md:py-32 md:max-w-[45rem] md:m-auto">
      <div>
        <h1 className="text-3xl font-medium mb-6">Sign in</h1>
        <p className="mb-12">
          If you don’t have an account register You can{" "}
          <Link to="/register">
            <span className={`${styles.login__register_text_color}`}>
              Register here !
            </span>
          </Link>
        </p>
      </div>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
