import vrController from "../../../assets/vr-controller.png";
import vrHeadsetUpgrade from "../../../assets/vr-headset-upgrade.png";
import vrHapticDevices from "../../../assets/vr-haptic-devices.png";
import vrBattery from "../../../assets/vr-battery.png";
import vrTreadmills from "../../../assets/vr-treadmills.png";
import vrAudio from "../../../assets/vr-audio.png";

import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";

function ProductCard(props: any) {
  return (
    <Link to="/">
      <div className="flex flex-col items-center border shadow-lg rounded p-6">
        <img
          className="object-contain mb-6 h-[27rem]"
          src={vrController}
          alt={props.productName}
        />
        <h5 className="font-bold text-base mb-2.5">Vr controller</h5>
        <p
          className={`${styles.product_card__brand_name__color} font-bold text-sm mb-2.5`}
        >
          brandName
          {/* {props.brandName} */}
        </p>
        <h5
          className={`${styles.product_card__price_tag__color} font-bold text-base mb-9`}
        >
          $50,000
        </h5>
      </div>
    </Link>
  );
}

export default ProductCard;
