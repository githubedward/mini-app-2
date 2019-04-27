import React from "react";
// components/styles
import styles from "./styles/Routes.module.css";

const MapTab = ({ history }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <h1 className={styles.title}>Map Tools</h1>
      </div>
    </div>
  );
};

export default MapTab;
