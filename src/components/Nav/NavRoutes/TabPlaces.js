import React from "react";
// components/styles
import IconArrowBack from "../../shared-components/IconArrowBack";
import styles from "./NavRoutes.module.css";
import createIcon from "../../shared-utils/createMarkerIcon";

const Places = ({ history, places, showInfoBoxAction, closeInfoBoxAction }) => {
  return (
    <div className={styles.container}>
      <IconArrowBack
        className={styles.container_back}
        onClick={() => history.push("/")}
      />
      <div className={styles.tab}>
        <h1 className={styles.title}>Places</h1>
        <ul className={styles.places_container}>
          {places.data.map(place => {
            return (
              <li
                key={place.place_id}
                className={`${styles.places} ${places.placeInfo &&
                  places.placeInfo.place_id === place.place_id &&
                  styles.places_active}`}
                onMouseOver={() =>
                  !places.placeInfo && showInfoBoxAction(place)
                }
                onMouseLeave={closeInfoBoxAction}
              >
                <div className={styles.places_left}>
                  {createIcon(place.type, styles.places_left__icon)}
                </div>
                <div className={styles.places_right}>
                  <h4 className={styles.places_right__name}>{place.name}</h4>
                  <p className={styles.places_right__address}>
                    {place.address}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Places;
