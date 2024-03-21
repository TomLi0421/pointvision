import { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import Badge from "@mui/joy/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function NavBar(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${styles.navbar__bg_color} text-white flex justify-between flex-wrap items-center p-6 lg:px-36 lg:justify-normal`}
    >
      <span className="text-2xl font-bold lg:mr-12">
        <Link to="/">PointVision</Link>
      </span>

      {/* display on mobile size */}
      <div className="flex gap-x-3 lg:hidden">
        <Link to="#">
          <Badge badgeContent={props.shoppingCartQty}>
            <ShoppingCartIcon />
          </Badge>
        </Link>

        <button
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
          className="block ml-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>
      </div>

      <div
        className={`${
          !isOpen ? "hidden" : "block"
        } w-full text-center lg:flex lg:items-center lg:w-auto`}
      >
        <div className="flex flex-col gap-y-3 mt-6 lg:flex-row lg:mt-0">
          <Link to="/" className="text-xl block lg:inline-block lg:mr-4">
            Home
          </Link>
          <Link to="/product" className="text-xl block lg:inline-block lg:mr-4">
            Product
          </Link>
          <Link to="#" className="text-xl block lg:inline-block lg:mr-4">
            About Us
          </Link>
          <Link to="/login" className="text-xl block lg:hidden">
            Login / Register
          </Link>
        </div>
      </div>

      {/* display on desktop size */}
      <div className="hidden lg:flex lg:gap-x-3 lg:ml-auto">
        <Link to="/login" className="block lg:inline-block">
          Login / Register
        </Link>
        <Link to="#">
          <Badge badgeContent={props.shoppingCartQty}>
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </div>
    </nav>
  );
}
