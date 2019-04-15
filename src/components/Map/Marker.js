import React from "react";
import IconPin from "../shared-components/IconPin";
import styles from "./Map.module.css";
import createMarkerIcon from "../shared-utils/createMarkerIcon";

const Marker = ({ onMouseOver, onMouseLeave, result, type, active }) => {
  const shadowStyle =
    (result && styles.marker_result__shadow) || styles.marker_shadow;
  const markerStyle = `${styles.marker} ${result && styles.marker_result}`;
  const iconStyle = `${styles.marker_type} ${active &&
    styles.marker_type__active}`;
  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      // className={styles.default}
    >
      <IconPin className={markerStyle} />
      {createMarkerIcon(type, iconStyle)}
      <div className={shadowStyle} />
    </div>
  );
};

export default Marker;
