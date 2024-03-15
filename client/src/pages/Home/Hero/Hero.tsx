import { Link } from "react-router-dom";
import playingVR from "../../../assets/playing-vr.png";
import Button from "../../../components/ui/Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div
      className={`${styles.hero__bg_color} text-white p-6 text-center flex flex-col xl:flex-row lg:items-center lg:justify-between lg:px-36 lg:py-20 lg:text-left`}
    >
      <div className="mb-10 xl:mr-64 lg:mb-0">
        <h1 className="font-bold text-3xl mb-10 xl:text-6xl lg:leading-tight">
          Enhancing Your Virtual Reality, One Accessory at a Time
        </h1>
        <h4 className="mb-10 tracking-normal xl:text-xl">
          Explore high-quality VR accessories for an unmatched virtual
          experience.
        </h4>
        <Link to="/product">
          <Button className="bg-opacity-0 border border-solid border-white px-10 py-3.5 rounded hover:bg-white hover:text-black">
            Shop Now
          </Button>
        </Link>
      </div>

      <img
        className="w-full mx-auto lg:w-2/3 lg:mx-0 xl:w-1/2 2xl:w-4/12"
        src={playingVR}
        alt="playing VR"
      />
    </div>
  );
}
