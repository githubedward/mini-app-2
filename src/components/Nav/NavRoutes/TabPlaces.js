import React from "react";
// components/styles
import IconArrowBack from "../../shared/IconArrowBack";
import IconPin from "../../shared/IconPin";
import styles from "./NavRoutes.module.css";

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
                className={styles.places}
                onMouseOver={() =>
                  !places.placeInfo && showInfoBoxAction(place)
                }
                onMouseLeave={closeInfoBoxAction}
              >
                <div className={styles.places_left}>
                  <IconPin />
                </div>
                <div className={styles.places_right}>
                  <p className={styles.places_text}>{place.name}</p>
                  <p>@ {place.vicinity}</p>
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
