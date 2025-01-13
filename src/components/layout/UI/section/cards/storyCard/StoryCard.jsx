import React from "react";
import styles from "./StoryCard.module.css";

function StoryCard({ sector, service, title, img, story }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imgContainer}>
        <img src={img} alt="Story Card Image" className={styles.img} />
      </div>
      <div className={`${styles.sectorAndServiceContainer} d-flex gap-1`}>
        <p className={styles.service}>{service}</p>•
        <p className={styles.sector}>{sector}</p>
      </div>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.storyContainer}>
        <p className={styles.story}>{story}</p>
      </div>
    </div>
  );
}

export default StoryCard;
