import React from "react";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1 style={{ fontWeight: 100 }}>oops😬</h1>
        <h5>Something went wrong</h5>
        <p>The resource you are trying to access is not available.</p>
      </div>
    </div>
  );
}

export default ErrorPage;
