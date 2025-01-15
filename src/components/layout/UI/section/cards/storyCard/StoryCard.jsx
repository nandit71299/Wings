import React from "react";
import styles from "./StoryCard.module.css";
import { useNavigate } from "react-router-dom";

function StoryCard({ id, sector, service, title, img, story, mode }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.cardContainer}
      onClick={() => {
        navigate(`/stories/${id}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <div className={styles.imgContainer}>
        <img src={img} alt="Story Card Image" className={styles.img} />
      </div>
      <div className={`${styles.sectorAndServiceContainer} d-flex gap-1`}>
        <p className={styles.service}>{service}</p>
        <p
          style={{
            color:
              mode === "light" ? "var(--text-gray)" : "var(--text-light-gray)",
            margin: "0",
          }}
        >
          •
        </p>
        <p className={styles.sector}>{sector}</p>
      </div>
      <div className={styles.titleContainer}>
        <h2
          className={styles.title}
          style={{
            color: mode === "light" ? "var(--text-black)" : "var(--text-white)",
          }}
        >
          {title}
        </h2>
      </div>
      <div className={styles.storyContainer}>
        <p
          className={styles.story}
          style={{
            color: mode === "light" ? "var(--text-gray)" : "var(--text-gray)",
            margin: "0",
            fontWeight: "bold",
            lineHeight: "30px",
          }}
        >
          {story}
        </p>
      </div>
    </div>
  );
}

export default StoryCard;
