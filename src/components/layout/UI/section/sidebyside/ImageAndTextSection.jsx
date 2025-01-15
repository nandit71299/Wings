import React from "react";
import styles from "./ImageAndTextSection.module.css";

function ImageAndTextSection({ img, title, description, imgPosition }) {
  return (
    <div
      className={`${styles.mainContainer}
    ${imgPosition !== "left" ? styles.reverseOrder : ""}`}
    >
      <div className={`${styles.leftSide}`}>
        <img
          src={img}
          className={styles.img}
          alt="Left Side Image Of The Section"
        />
      </div>
      <div className={styles.rightSide}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ImageAndTextSection;
