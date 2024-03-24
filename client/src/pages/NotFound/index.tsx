import { Link } from "react-router-dom";
import Button from "../../components/ui/Button";
import styles from "./NotFound.module.css";
import { useEffect } from "react";

function NotFoundPage() {
  useEffect(() => {
    document.title = "PointVision - Not Found";
  }, []);
  return (
    <div className="flex justify-center my-28">
      <div className="text-center max-w-[31rem] ">
        <h1
          className={`${styles.not_found__title_color} font-bold text-6xl mb-2`}
        >
          404
        </h1>
        <p
          className={`${styles.not_found__description_color} font-semibold text-lg mb-16`}
        >
          Sorry. the content you’re looking for doesn’t exist. Either it was
          removed, or you mistyped the link.
        </p>

        <div className="flex flex-col items-center md:flex-row md:justify-center">
          <Link to="/">
            <Button
              className={`${styles.not_found__home_btn} text-white rounded py-4 px-6 mb-1 md:mr-1 md:mb-0`}
            >
              Go to homepage
            </Button>
          </Link>
          <Button
            className={`${styles.not_found__contact_btn} border border-solid py-4 px-12 rounded hover:text-white`}
          >
            Contact us
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
