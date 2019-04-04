import React from "react";
// components/styles
import styles from "./NavRoutes.module.css";
import IconArrowBack from "../../shared/IconArrowBack";

const Pin = ({ history }) => {
  return (
    <div className={styles.container}>
      <IconArrowBack
        className={styles.container_back}
        onClick={() => history.push("/")}
      />
      <div className={styles.tab}>
        <h1 className={styles.title}>Map</h1>
      </div>
    </div>
  );
};

export default Pin;
