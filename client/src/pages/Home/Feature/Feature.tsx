import styles from "./Feature.module.css";
import FeatureCard from "./FeatureCard";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import SettingsInputHdmiIcon from "@mui/icons-material/SettingsInputHdmi";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";

export default function Feature() {
  return (
    <div className="py-6 sm:mb-0 lg:max-w-[66rem] lg:mx-auto lg:lg:grid lg:grid-cols-3">
      <div className="lg:px-6 lg:mr-5 lg:max-w-96 lg:col-span-1">
        <div
          className={`${styles.feature__horizontal_line} h-1 w-24 mb-9`}
        ></div>
        <h2
          className={`${styles.feature__title__color} font-bold text-4xl mb-9`}
        >
          Featured Product
        </h2>
        <p
          className={`${styles.feature__description__color} text-sm font-normal mb-9`}
        >
          Experience immersive gameplay with our featured VR accessory.
          Top-rated, comfortable, and compatible with all major VR systems.
          Elevate your gaming today!
        </p>
      </div>

      {/* the feature card component is used here */}
      {/* TODO: Change the title, icon and description for each card */}
      {/* icon size should be w-14, h-14, text-white */}
      <div className="lg:px-6 lg:grid lg:grid-cols-2 lg:col-span-2">
        <FeatureCard
          icon={
            <SportsEsportsIcon sx={{ width: 36, height: 36, color: "white" }} />
          }
          title="Level Up Your Gameplay"
          description="
          Our products are packed with innovative features that enhance your VR experience for unmatched immersion and performance."
        />
        <FeatureCard
          icon={
            <SettingsInputHdmiIcon
              sx={{ width: 36, height: 36, color: "white" }}
            />
          }
          title="Effortless Setup"
          description="
          Simply plug and play to experience VR immersion in minutes"
        />
        <FeatureCard
          icon={
            <LocalShippingIcon sx={{ width: 36, height: 36, color: "white" }} />
          }
          title="Fast and Reliable Shipping"
          description="
          We prioritize efficient logistics and secure packaging, so you can begin your virtual reality adventures without delay."
        />
        <FeatureCard
          icon={
            <CreditCardIcon sx={{ width: 36, height: 36, color: "white" }} />
          }
          title="Simplify Your Shopping Experience"
          description="
          Our website offers a user-friendly checkout experience for purchasing VR accessories. With just a few clicks."
        />
      </div>
    </div>
  );
}
