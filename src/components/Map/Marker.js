import React from "react";
import IconPin from "../shared/IconPin";
import styles from "./Map.module.css";

const Marker = ({onClick }) => {
  return (
    <div onClick={onClick}>
      <IconPin className={styles.marker} />
    </div>
  );
};

export default Marker;
