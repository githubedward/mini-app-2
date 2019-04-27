import React from "react";
// components/styles
import styles from "./styles/NavRoutes.module.css";

const Community = ({ history }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <h1 className={styles.title}>Community</h1>
      </div>
    </div>
  );
};

export default Community;
