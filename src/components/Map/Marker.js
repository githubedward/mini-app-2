import React from "react";
import IconPin from "../shared/IconPin";
import styles from "./Map.module.css";

const Marker = ({ onMouseOver, onMouseLeave, result }) => {
  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      className={styles.default}
    >
      <IconPin
        className={`${styles.marker} ${result && styles.marker_result}`}
      />
    </div>
  );
};

export default Marker;
