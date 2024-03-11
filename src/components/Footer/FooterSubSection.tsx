import styles from "./FooterSubSection.module.css";

export default function FooterSubSection(props: {
  title: string;
  subTitles: string[];
}) {
  return (
    <div className="mb-7">
      <h2
        className={`${styles.fotter__title_color}text-white font-bold text-2xl mb-6`}
      >
        {props.title}
      </h2>
      <div className="flex flex-col">
        {props.subTitles.map((subTitle, index) => {
          return (
            <a
              key={index}
              className={`${styles.footer__subtitle_color} font-bold text-sm mb-2.5 hover:underline`}
              href="#"
            >
              {subTitle}
            </a>
          );
        })}
      </div>
    </div>
  );
}
