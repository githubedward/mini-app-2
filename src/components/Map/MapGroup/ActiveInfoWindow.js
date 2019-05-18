import React, { Fragment } from "react";
import PropTypes from "prop-types";
import IconClose from "../../shared-components/IconClose";
import styles from "./styles/InfoWindow.module.css";

const ActiveInfoWindow = ({ onClick, onClose, place, pinned, user }) => {
  return (
    <div className={styles.active_window}>
      <button onClick={onClose} className={styles.active_window__close}>
        <IconClose />
      </button>
      <h3>{place.name}</h3>
      <p>{place.address}</p>
      <PinnedBy pinned={pinned} user={user} place={place} />
      <ActionButton pinned={pinned} onClick={onClick} />
    </div>
  );
};

ActiveInfoWindow.propTypes = {
  onClick: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  place: PropTypes.object.isRequired,
  pinned: PropTypes.any
};

const PinnedBy = ({ pinned, user, place }) => {
  const users = place.users;
  const others = users.length;
  return (
    <Fragment>
      {pinned && (
        <p className={styles.active_window__pinnedby}>
          <span>You</span>
          {` and ${others} others have been here`}
        </p>
      )}
      {!pinned && (
        <p className={styles.active_window__pinnedby}>{`${users[0].fullname} ${
          others - 1 !== 0 ? `and ${others - 1}` : ""
        } ${
          others - 1 > 1 ? "others" : others - 1 === 1 ? "other" : ""
        } have been here`}</p>
      )}
    </Fragment>
  );
};

const ActionButton = ({ pinned, onClick }) => {
  return (
    <Fragment>
      {(!pinned && (
        <button onClick={onClick} className={styles.active_window__button}>
          Pin this place!
        </button>
      )) || (
        <button className={styles.active_window__button_active}>
          How was it?
        </button>
      )}
    </Fragment>
  );
};

export default ActiveInfoWindow;
