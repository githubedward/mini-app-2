import React from "react";
import IconPin from "../../shared-components/IconPin";
import styles from "./Map.module.css";
import createMarkerIcon from "components/shared-utils/createMarkerIcon";

const Marker = ({ onMouseOver, onMouseLeave, result, type, active }) => {
  const shadowStyle =
    (result && styles.marker_result__shadow) || styles.marker_shadow;
  const markerStyle = `${styles.marker} ${result &&
    styles.marker_result} ${active && styles.marker_active}`;
  const iconStyle = `${styles.marker_type} ${active &&
    styles.marker_type__active} ${result && styles.marker_type__result}`;
  return (
    <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      <IconPin className={markerStyle} />
      {createMarkerIcon(type, iconStyle)}
      <div className={shadowStyle} />
    </div>
  );
};

export default Marker;
