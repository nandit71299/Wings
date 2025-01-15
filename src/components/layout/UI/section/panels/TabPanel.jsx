import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./TabPanel.module.css";

function TabPanel({ data }) {
  const [selectedId, setSelectedId] = useState(data?.[0].id);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftTab}>
        {data.map((item) => (
          <motion.h2
            key={item.id}
            onClick={() => handleClick(item.id)}
            initial={{ color: "rgba(133, 133, 133, 0.389)" }}
            animate={{
              color:
                selectedId === item.id ? "white" : "rgba(133, 133, 133, 0.389)",
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className={styles.tab}
          >
            {item.title}
          </motion.h2>
        ))}
      </div>
      <div className={styles.rightTab}>
        {data.map((item) =>
          item.id === selectedId ? (
            <div key={item.id} className={styles.tabDescription}>
              <p>{item.description}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default TabPanel;
