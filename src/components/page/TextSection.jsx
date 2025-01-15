import React from "react";
import styles from "./TextSection.module.css";

function TextSection({ title, description, mode }) {
  return (
    <div>
      <h2
        style={{ color: mode === "light" ? "var(--text-black)" : "" }}
        className={styles.title}
      >
        {title}
      </h2>
      <p
        className={styles.description}
        style={{ color: mode === "light" ? "var(--text-yellow)" : "" }}
      >
        {description}
      </p>
    </div>
  );
}

export default TextSection;
