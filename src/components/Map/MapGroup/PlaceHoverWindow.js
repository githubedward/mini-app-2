import React from "react";
import PropTypes from "prop-types";
import styles from "./styles/InfoWindow.module.css";

const PlacesInfoWindow = ({ place, pinned, user }) => {
  const windowStyles = `${styles.places_window} ${pinned &&
    styles.places_window__pinned}`;
  return (
    <div className={windowStyles}>
      <h3>{place.name}</h3>
      <p>{place.address}</p>
    </div>
  );
};

PlacesInfoWindow.propTypes = {
  place: PropTypes.object.isRequired,
  pinned: PropTypes.any
};

export default PlacesInfoWindow;
