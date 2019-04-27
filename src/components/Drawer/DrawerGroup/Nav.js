import React from "react";
import { Link } from "react-router-dom";
// components/styles
import IconCommunity from "../../shared-components/IconCommunity";
import IconFeed from "../../shared-components/IconPlaces";
import IconHome from "../../shared-components/IconHome";
import IconArrowBack from "../../shared-components/IconArrowBack";
import styles from "./styles/NavBar.module.css";

const NavBar = ({ location, history }) => {
  const path = location.pathname;
  // generate classes for links
  const getLinkClasses = linkPath => {
    return path === linkPath ? styles.active : undefined;
  };
  // generate classes for icons
  const getIconClasses = linkPath => {
    return `${styles.icons} ${path === linkPath && styles.icons_active}`;
  };
  // generate class for the container
  const containerClasses = `${styles.container} ${path === "/" &&
    styles.container_home}`;

  return (
    <div className={containerClasses}>
      <IconArrowBack
        className={styles.container_back}
        onClick={() => {
          history.push("/");
        }}
      />
      <Link to="/home" className={getLinkClasses("/home")}>
        <IconHome className={getIconClasses("/home")} />
      </Link>
      <Link to="/community" className={getLinkClasses("/community")}>
        <IconCommunity className={getIconClasses("/community")} />
      </Link>
      <Link to="/places" className={getLinkClasses("/places")}>
        <IconFeed className={getIconClasses("/places")} />
      </Link>
    </div>
  );
};

export default NavBar;
