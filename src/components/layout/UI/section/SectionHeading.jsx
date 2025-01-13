import React from "react";
import styles from "./SectionHeading.module.css";

function SectionHeading({ title, subtitle, mode }) {
  return (
    <>
      <div className="p-5 pt-5 py-5 pb-2">
        <h1 className={mode === "light" ? styles.titleLight : styles.titleDark}>
          {title}
        </h1>
        <p
          className={
            mode === "light" ? styles.subTitleLight : styles.subTitleDark
          }
        >
          {" "}
          {subtitle}
        </p>
      </div>
    </>
  );
}

export default SectionHeading;
