import styles from "./Footer.module.css";
import FooterSubSection from "./FooterSubSection";

export default function Footer() {
  return (
    <>
      <div
        className={`${styles.fotter__bg_color} py-20 px-20 lg:flex lg:py-12 lg:px-48 lg:justify-around`}
      >
        <div className="max-w-72">
          <h2
            className={`${styles.fotter__title_color}text-white font-bold text-2xl mb-6`}
          >
            Get In Touch
          </h2>
          <p className={`${styles.footer__subtitle_color} mb-6`}>
            Stay connected with us! Get in touch through our social media
            channels.
          </p>
          {/* social media icons */}
          <div className="flex mb-7">
            {/* facebook icon */}
            <span
              className={`${styles.footer__social_media_icon_color} [&>svg]:h-6 [&>svg]:w-6 mr-5 hover:cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </span>
            {/* instagram icon */}
            <span
              className={`${styles.footer__social_media_icon_color} [&>svg]:h-6 [&>svg]:w-6 mr-5 hover:cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </span>
            {/* x icon */}
            <span
              className={`${styles.footer__social_media_icon_color} [&>svg]:h-6 [&>svg]:w-6 hover:cursor-pointer`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </span>
          </div>
        </div>

        <FooterSubSection
          title="Company Info"
          subTitles={["About Us", "We are hirding", "Blog"]}
        />
        <FooterSubSection
          title="Features"
          subTitles={["Product", "Live Chat", "Unlimited Support"]}
        />
      </div>
      <div
        className={`${styles.footer__copy_right_bg_color} py-6 px-20 md:mt-0`}
      >
        <p className={`${styles.footer__subtitle_color} font-bold text-center`}>
          &copy; 2024 PointVision, Inc. All rights reserved.
        </p>
      </div>
    </>
  );
}
