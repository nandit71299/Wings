import React from "react";
import styles from "./ExpertiseCard.module.css";

function ExpertiseCard({ title, img, description }) {
  return (
    <div className={styles.cardContainer}>
      <div className={`d-flex align-items-center ${styles.titleContainer}`}>
        <div className={styles.imgContainer}>
          <img src={img} alt="Technology Logo" className={styles.img} />
        </div>
        <h1 className={styles.title}>{title}</h1>
      </div>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default ExpertiseCard;
