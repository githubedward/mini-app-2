import React from "react";
import IconClose from "../shared-components/IconClose";
import styles from "./Map.module.css";

const PinItWindow = ({ onClick, onClose, place }) => {
  return (
    <div className={styles.pinit_window}>
      <button onClick={onClose} className={styles.pinit_window__close}>
        <IconClose />
      </button>
      <h3>{place.name}</h3>
      <p>@ {place.vicinity} Vicinity</p>
      <button onClick={onClick} className={styles.pinit_window__button}>
        Pin this place!
      </button>
    </div>
  );
};

export default PinItWindow;
