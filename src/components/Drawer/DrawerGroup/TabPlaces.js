import React from "react";
import PropTypes from "prop-types";
// components/styles
import styles from "./styles/Routes.module.css";
import createIcon from "components/shared-utils/createMarkerIcon";

const Place = ({
  place,
  placeInfo,
  pinned,
  showHoverPlaceAction,
  closeInfoBoxAction
}) => {
  const active = placeInfo && placeInfo.place_id === place.place_id;
  const iconStyles = `${styles.row_left__icon} ${active &&
    styles.row_left__icon_default}
    ${active && pinned && styles.row_left__icon_pinned}`;
  return (
    <li
      className={`${styles.row} ${active && styles.row_active}`}
      onMouseOver={() =>
        !placeInfo && showHoverPlaceAction({ ...place, pinned })
      }
      onMouseLeave={closeInfoBoxAction}
    >
      <div className={styles.row_left}>
        {createIcon(place.type, iconStyles)}
      </div>
      <div className={styles.row_right}>
        <h4 className={styles.row_right__top}>{place.name}</h4>
        <p className={styles.row_right__bottom}>{place.address}</p>
      </div>
    </li>
  );
};

const Places = ({
  places,
  showHoverPlaceAction,
  closeInfoBoxAction,
  user: propsUser
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <h1 className={styles.title}>Places</h1>
        <ul className={styles.row_container}>
          {places.data.map(place => {
            const pinned = place.users.find(user => user.id === propsUser.id);
            return (
              <Place
                key={place.place_id}
                place={place}
                placeInfo={places.placeInfo}
                pinned={pinned}
                showHoverPlaceAction={showHoverPlaceAction}
                closeInfoBoxAction={closeInfoBoxAction}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Places.propTypes = {
  places: PropTypes.object.isRequired,
  showHoverPlaceAction: PropTypes.func.isRequired,
  closeInfoBoxAction: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default Places;
