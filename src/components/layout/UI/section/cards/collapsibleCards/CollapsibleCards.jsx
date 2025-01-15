import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./CollapsibleCards.module.css";

function CollapsibleCards({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="px-5 py-5">
      {data.map((item, index) => {
        const title = Object.keys(item)[0];
        const content = item[title];

        return (
          <div key={index} className={styles.card}>
            <div
              className={styles.cardHeader}
              onClick={() => handleToggle(index)}
            >
              <div className="d-flex gap-2 align-items-center">
                {content.icon && (
                  <img
                    src={content.icon}
                    className="img-fluid"
                    style={{ width: "40px", height: "40px" }}
                    alt=""
                  />
                )}
                <h2 className={styles.cardTitle}>
                  {title.slice(0, 1).toUpperCase() + title.slice(1)}
                </h2>
              </div>
              <span
                className={`${styles.arrow} ${
                  openIndex === index ? styles.arrowOpen : styles.arrowClosed
                }`}
              >
                &#8594;
              </span>
            </div>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className={`${styles.cardDescription} ${styles.open}`}
                  initial={{ opacity: 0, maxHeight: 0, display: "none" }}
                  animate={{ opacity: 1, maxHeight: "100%", display: "block" }}
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ ease: "easeIn", duration: 0.3 }}
                >
                  <h2>{content.title}</h2>
                  <p>{content.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export default CollapsibleCards;
