import React from "react";
import styles from "./Map.module.css";

const PlacesInfoWindow = ({ place }) => {
  return (
    <div className={styles.places_window}>
      <h3>{place.name}</h3>
      <p>@ {place.vicinity} Vicinity</p>
    </div>
  );
};

export default PlacesInfoWindow;
