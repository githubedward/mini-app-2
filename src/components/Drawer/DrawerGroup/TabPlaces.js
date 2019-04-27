import React from "react";
// components/styles
import styles from "./styles/NavRoutes.module.css";
import createIcon from "components/shared-utils/createMarkerIcon";

const Place = ({
  place,
  placeInfo,
  pinned,
  showHoverPlaceAction,
  closeInfoBoxAction
}) => {
  const active = placeInfo && placeInfo.place_id === place.place_id;
  const iconStyles = `${styles.places_left__icon} ${active &&
    styles.places_left__icon_default}
    ${active && pinned && styles.places_left__icon_pinned}`;
  return (
    <li
      className={`${styles.places} ${active && styles.places_active}`}
      onMouseOver={() =>
        !placeInfo && showHoverPlaceAction({ ...place, pinned })
      }
      onMouseLeave={closeInfoBoxAction}
    >
      <div className={styles.places_left}>
        {createIcon(place.type, iconStyles)}
      </div>
      <div className={styles.places_right}>
        <h4 className={styles.places_right__name}>{place.name}</h4>
        <p className={styles.places_right__address}>{place.address}</p>
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
        <ul className={styles.places_container}>
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

export default Places;
