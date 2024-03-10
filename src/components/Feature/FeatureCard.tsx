import styles from "./FeatureCard.module.css";

export default function FeatureCard(props: any) {
  return (
    <div className="flex py-6 lg:px-7 lg:w-80">
      <div
        className={`${styles.feature_card__bg_color} p-3 rounded-full mr-5 w-14 h-14 flex items-center justify-center`}
      >
        {props.icon}
      </div>

      <div>
        <h5 className="font-bold text-base mb-4">{props.title}</h5>
        <p className="text-xs">{props.description}</p>
      </div>
    </div>
  );
}
