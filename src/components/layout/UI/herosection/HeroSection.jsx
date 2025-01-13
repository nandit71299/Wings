import React from "react";
import styles from "./HeroSection.module.css";

function HeroSection({ img, title, subtitle }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={styles.mainContainer}
    >
      <p className={styles.title}>{title}</p>
      <h1 className={styles.subTitle}>{subtitle}</h1>
      <div className={styles.backgroundOverlay}></div>
    </div>
  );
}

export default HeroSection;
