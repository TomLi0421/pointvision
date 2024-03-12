import styles from "./Feature.module.css";
import FeatureCard from "./FeatureCard";
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          }
          title="Easy to use"
          description="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          }
          title="Easy to use"
          description="
          Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          }
          title="Easy to use"
          description="
        Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
        <FeatureCard
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-14 h-14 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 12.75 6 6 9-13.5"
              />
            </svg>
          }
          title="Easy to use"
          description="
      Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />
      </div>
    </div>
  );
}
