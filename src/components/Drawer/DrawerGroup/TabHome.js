import React from "react";
import PropTypes from "prop-types";
// components/styles
import styles from "./styles/Routes.module.css";
import IconRoundUser from "../../shared-components/IconRoundId";
import IconRoundId from "../../shared-components/IconRoundUser";

const Home = ({
  user: {
    fullname,
    logins: { username }
  },
  logout
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <h1 className={styles.title}>My Profile</h1>
        <ul>
          <li className={styles.home}>
            <IconRoundUser className={styles.home_icon} />
            <div className={`${styles.home_text} ${styles.home_text__border}`}>
              {fullname}
            </div>
          </li>
          <li className={styles.home}>
            <IconRoundId className={styles.home_icon} />
            <div className={styles.home_group}>
              <div className={styles.home_text}>{username}</div>
              <button
                type="button"
                onClick={logout}
                className={styles.button_logout}
              >
                Logout
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

Home.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default Home;
