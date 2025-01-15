import React, { useState } from "react";
import styles from "./TabPanel.module.css";

function TabPanel({ data }) {
  const [selectedId, setSelectedId] = useState(data?.[0].id);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftTab}>
        {data.map((item) => (
          <h2
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={selectedId === item.id ? styles.activeTab : styles.tab}
          >
            {item.title}
          </h2>
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
