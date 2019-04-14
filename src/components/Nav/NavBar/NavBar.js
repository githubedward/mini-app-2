import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
// components/styles
import IconCommunity from "./Icons/IconCommunity";
import IconFeed from "./Icons/IconPlaces";
import IconHome from "./Icons/IconHome";
// import IconMap from "./Icons/IconMap";
import styles from "./NavBar.module.css";

const NavBar = props => {
  const path = props.location.pathname;
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
      <Link to="/home" className={getLinkClasses("/home")}>
        <IconHome className={getIconClasses("/home")} />
      </Link>
      <Link to="/community" className={getLinkClasses("/community")}>
        <IconCommunity className={getIconClasses("/community")} />
      </Link>
      <Link to="/places" className={getLinkClasses("/places")}>
        <IconFeed className={getIconClasses("/places")} />
      </Link>
      {/* <Link to="/map" className={getLinkClasses("/map")}>
        <IconMap className={getIconClasses("/map")} />
      </Link> */}
    </div>
  );
};

export default withRouter(NavBar);
