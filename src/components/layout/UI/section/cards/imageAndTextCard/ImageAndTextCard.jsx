import React from "react";
import styles from "./ImageAndTextCard.module.css";

function ImageAndTextCard({ id, icon, text, color, orientation, description }) {
  const isLandscape = orientation === "landscape";

  return (
    <div
      key={id}
      className={styles.advantageContainer}
      style={{
        flexDirection: isLandscape ? "row" : "column", // Switch layout based on orientation
      }}
    >
      <div
        className={styles.advantageItem}
        style={{
          backgroundColor: color,
          flexDirection: isLandscape ? "row" : "column", // Adjust direction of flex
          justifyContent: isLandscape ? "flex-start" : "space-evenly",
          textAlign: isLandscape ? "start" : "center",
          height: isLandscape ? "auto" : "250px",
        }}
      >
        <div className={styles.imageContainer}>
          <img src={icon} alt={text} className={styles.image} />
        </div>

        {/* For landscape orientation, show text beside image */}
        {isLandscape && (
          <div
            className={styles.textContainer}
            style={{
              textAlign: isLandscape ? "start" : "center",
              alignItems: isLandscape ? "start" : "center",
            }}
          >
            <h4
              style={{
                color: color === "black" ? "white" : "black",
                fontSize: "28px",
              }}
            >
              {text}
            </h4>
            {description && <p className={styles.description}>{description}</p>}
          </div>
        )}

        {/* For portrait orientation, text is below the image */}
        {!isLandscape && (
          <div className={styles.textContainer}>
            <h4
              style={{
                color: color === "black" ? "white" : "black",
                fontSize: "28px",
                textAlign: "center",
              }}
            >
              {text}
            </h4>
            {description && <p className={styles.description}>{description}</p>}
          </div>
        )}
      </div>
    </div>
  );
}

export default ImageAndTextCard;
