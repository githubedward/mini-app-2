import React from "react";
import PropTypes from "prop-types";
import IconClose from "../../shared-components/IconClose";
import styles from "./styles/InfoWindow.module.css";

const ActiveInfoWindow = ({ onClick, onClose, place, pinned }) => {
  return (
    <div className={styles.active_window}>
      <button onClick={onClose} className={styles.active_window__close}>
        <IconClose />
      </button>
      <h3>{place.name}</h3>
      <p>{place.address}</p>
      {(!pinned && (
        <button onClick={onClick} className={styles.active_window__button}>
          Pin this place!
        </button>
      )) || (
        <button className={styles.active_window__button_active}>
          How was it?
        </button>
      )}
    </div>
  );
};

ActiveInfoWindow.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  place: PropTypes.object.isRequired,
  pinned: PropTypes.any
};

export default ActiveInfoWindow;
