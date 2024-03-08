import playingVR from "../assets/playing-vr.png";
import Button from "./Button";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div
      className={`${styles.hero__bg_color} ${styles.hero__text__color} p-10 text-center lg:flex lg:items-center lg:justify-between lg:px-36 lg:py-20 lg:text-left`}
    >
      <div className="lg:pr-64">
        <h1 className="font-bold text-3xl mb-10 lg:text-6xl lg:leading-tight">
          Enhancing Your Virtual Reality, One Accessory at a Time
        </h1>
        <h4 className="mb-10 tracking-normal lg:text-xl">
          Explore high-quality VR accessories for an unmatched virtual
          experience.
        </h4>
        <Button>Shop Now</Button>
      </div>

      <img className="lg:w-auto mx-auto" src={playingVR} alt="playing VR" />
    </div>
  );
}
