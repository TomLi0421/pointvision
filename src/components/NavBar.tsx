import { useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`${styles.navbar__bg_color} ${styles.navbar__text__color} flex justify-between flex-wrap items-center p-6 lg:px-36 lg:justify-normal`}
    >
      <span className="font-bold lg:mr-12">PointVision</span>

      {/* display on mobile size */}
      <div className="flex gap-x-3 lg:hidden">
        <button className="block">
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>

        <button
          onClick={() => setIsOpen((prevOpen) => !prevOpen)}
          className="block"
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
          <a href="#" className="block lg:inline-block lg:mr-4">
            Home
          </a>
          <a href="#" className="block lg:inline-block lg:mr-4">
            Product
          </a>
          <a href="#" className="block lg:inline-block lg:mr-4">
            Contact
          </a>
          <a href="#" className="block lg:hidden">
            Login / Register
          </a>
        </div>
      </div>

      {/* display on desktop size */}
      <div className="hidden lg:flex lg:gap-x-3 lg:ml-auto">
        <a href="#" className="block lg:inline-block">
          Login / Register
        </a>
        <button className="block">
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
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
