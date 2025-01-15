import React from "react";
import styles from "./ServiceCard.module.css";
import { useNavigate } from "react-router-dom";

function SectionCard({ title, img, id }) {
  const navigate = useNavigate();

  return (
    <div
      className={`${styles.cardContainer} position-relative`}
      onClick={() => navigate(`/service/${id}`)}
    >
      <img className={styles.serviceImg} src={img} alt={title} />
      <div className={`${styles.backgroundOverlay}`}>
        <h2 className={`${styles.title} px-2`}>{title}</h2>
      </div>
    </div>
  );
}

export default SectionCard;
