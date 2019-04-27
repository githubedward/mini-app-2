import React from "react";
import IconPin from "../../shared-components/IconPin";
import styles from "./styles/Marker.module.css";
import createMarkerIcon from "components/shared-utils/createMarkerIcon";

const Marker = ({
  onMouseOver,
  onMouseLeave,
  onClick,
  result,
  type,
  active,
  pinned
}) => {
  const shadowStyle =
    (active && styles.marker_pinned__active) ||
    (result && styles.marker_result__shadow) ||
    (pinned && styles.marker_pinned__shadow) ||
    styles.marker_shadow;
  const markerStyle = `${styles.marker} ${result &&
    styles.marker_result} ${pinned && styles.marker_pinned} ${active &&
    styles.marker_active}`;
  const iconStyle = `${styles.marker_type} ${active &&
    styles.marker_type__active} ${result &&
    styles.marker_type__result} ${pinned && styles.marker_type__pinned}`;
  return (
    <div
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <IconPin className={markerStyle} />
      {createMarkerIcon(type, iconStyle)}
      <div className={shadowStyle} />
    </div>
  );
};

export default Marker;
