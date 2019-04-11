import React from "react";
import styles from "./Map.module.css";

const PinWindow = ({ onClick, place }) => {
  return (
    <div className={styles.pinit}>
      <h3>{place.name}</h3>
      <p>@ {place.vicinity} Vicinity</p>
      <button onClick={onClick}>Pin this place!</button>
    </div>
  );
};

export default PinWindow;
