import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import RegisterForm from "./RegisterForm/RegisterForm";
import { useEffect } from "react";

function RegisterPage() {
  useEffect(() => {
    document.title = "PointVision - Register";
  }, []);

  return (
    <div className="p-6 md:py-32 md:max-w-[34rem] md:m-auto">
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
