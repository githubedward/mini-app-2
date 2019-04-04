import React from "react";
// components/styles
import IconArrowBack from "../../shared/IconArrowBack";
import styles from "./NavRoutes.module.css";

const Places = ({ history }) => {
  return (
    <div className={styles.container}>
      <IconArrowBack
        className={styles.container_back}
        onClick={() => history.push("/")}
      />
      <div className={styles.tab}>
        <h1 className={styles.title}>Places</h1>
      </div>
    </div>
  );
};

export default Places;
