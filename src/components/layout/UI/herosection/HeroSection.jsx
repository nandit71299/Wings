import React from "react";
import styles from "./HeroSection.module.css";
import useIsMobile from "../../../../hooks/useIsMobile";

function HeroSection({ img, title, subtitle }) {
  const isMobile = useIsMobile();
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={styles.mainContainer}
    >
      <p
        className={styles.title}
        style={{
          width: isMobile ? "100%" : "",
        }}
      >
        {title}
      </p>
      <h1
        className={styles.subTitle}
        style={{
          width: isMobile ? "100%" : "",
        }}
      >
        {subtitle}
      </h1>
      <div
        className={styles.backgroundOverlay}
        style={{
          background: isMobile
            ? "linear-gradient(10.68deg, rgba(0, 0, 0, 0.72) 52.65%, rgba(133, 133, 133, 0) 100%)"
            : "",
        }}
      ></div>
    </div>
  );
}

export default HeroSection;
