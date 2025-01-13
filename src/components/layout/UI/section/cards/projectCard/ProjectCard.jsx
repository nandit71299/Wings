import React from "react";
import styles from "./ProjectCard.module.css";

function ProjectCard({ title, img }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardImgContainer}>
        <img src={img} alt="project-logo" className={styles.cardImage} />
      </div>
      <h1 className={styles.title}>{title}</h1>
    </div>
  );
}

export default ProjectCard;
