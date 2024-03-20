import vrController from "../assets/vr-controller.png";
import vrHeadsetUpgrade from "../assets/vr-headset-upgrade.png";
import vrHapticDevices from "../assets/vr-haptic-devices.png";
import vrBattery from "../assets/vr-battery.png";
import vrTreadmills from "../assets/vr-treadmills.png";
import vrAudio from "../assets/vr-audio.png";

type AccessoryType = {
  typeName: string;
  img: string;
  cardColor: string;
  type?: string;
};

export const accessoriesTypeData: AccessoryType[] = [
  {
    typeName: "VR Controller",
    img: vrController,
    cardColor: "bg-neutral-900",
    type: "controller",
  },
  {
    typeName: "Comfort and Care",
    img: vrHeadsetUpgrade,
    cardColor: "bg-amber-900",
    type: "comfort",
  },
  {
    typeName: "Haptic Devices",
    img: vrHapticDevices,
    cardColor: "bg-lime-900",
    type: "haptic",
  },
  {
    typeName: "Cables, Chargers and Batteries",
    img: vrBattery,
    cardColor: "bg-emerald-900",
    type: "cable",
  },
  {
    typeName: "Treadmills and Fitness",
    img: vrTreadmills,
    cardColor: "bg-teal-900",
    type: "treadmill",
  },
  {
    typeName: "Audio",
    img: vrAudio,
    cardColor: "bg-sky-900",
    type: "audio",
  },
];
