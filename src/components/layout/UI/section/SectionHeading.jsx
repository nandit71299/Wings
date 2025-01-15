import React from "react";
import styles from "./SectionHeading.module.css";
import useIsMobile from "../../../../hooks/useIsMobile";

function SectionHeading({ title, subtitle, mode }) {
  const isMobile = useIsMobile();
  return (
    <>
      <div className={`p-5 pt-5 pb-4 ${isMobile ? "px-3" : "px-5"}`}>
        <h1
          className={mode === "light" ? styles.titleLight : styles.titleDark}
          style={{
            width: isMobile ? "100%" : "",
            fontSize: isMobile ? "38px" : "",
          }}
        >
          {title}
        </h1>
        <p
          className={
            mode === "light" ? styles.subTitleLight : styles.subTitleDark
          }
          style={{
            width: isMobile ? "100%" : "",
            fontSize: isMobile ? "16px" : "",
          }}
        >
          {" "}
          {subtitle}
        </p>
      </div>
    </>
  );
}

export default SectionHeading;
