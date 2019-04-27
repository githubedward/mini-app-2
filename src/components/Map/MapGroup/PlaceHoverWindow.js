import React from "react";
import styles from "./styles/InfoWindow.module.css";

const PlacesInfoWindow = ({ place, pinned }) => {
  const windowStyles = `${styles.places_window} ${pinned &&
    styles.places_window__pinned}`;
  return (
    <div className={windowStyles}>
      <h3>{place.name}</h3>
      <p>{place.address}</p>
    </div>
  );
};

export default PlacesInfoWindow;
