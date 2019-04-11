import React from "react";
import IconPin from "../shared/IconPin";
import styles from "./Map.module.css";

const Marker = ({ onClick, result }) => {
  return (
    <div onClick={onClick}>
      <IconPin
        className={`${styles.marker} ${result && styles.marker_result}`}
      />
    </div>
  );
};

export default Marker;
