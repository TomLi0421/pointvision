import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import RegisterForm from "./RegisterForm/RegisterForm";
import { useEffect } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function RegisterPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "PointVision - Register";

    // get cookie from browser if logged in
    const token = cookies.get("token");
    if (token) {
      navigate("/purchase_history");
    }
  }, []);

  return (
    <div className="p-6 md:py-32 md:max-w-[45rem] md:m-auto">
      <div>
        <h1 className="text-3xl font-medium mb-6">Register</h1>
        <p className="mb-12">
          If you already have an account register{" "}
          <Link to="/login">
            <span className={`${styles.register_text_color}`}>
              Login here !
            </span>
          </Link>
        </p>
      </div>
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;
