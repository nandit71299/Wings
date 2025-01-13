import React from "react";
import styles from "./SectionCard.module.css";

function SectionCard({ title, img }) {
  return (
    <div className={`${styles.cardContainer} position-relative`}>
      <img className={styles.serviceImg} src={img} alt={title} />
      <div className={`${styles.backgroundOverlay}`}>
        <h2 className={`${styles.title} px-2`}>{title}</h2>
      </div>
    </div>
  );
}

export default SectionCard;
