import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
// components/styles
import IconCommunity from "./IconCommunity";
import IconFeed from "./IconFeed";
import IconHome from "./IconHome";
import IconPlace from "./IconPlace";
import styles from "./NavBar.module.css";

const NavBar = props => {
  const path = props.location.pathname;
  const getLinkClasses = linkPath => {
    return path === linkPath ? styles.active : undefined;
  };
  const getIconClasses = linkPath => {
    return `${styles.icons} ${path === linkPath && styles.icons_active}`;
  };
  return (
    <div className={styles.container}>
      <Link to="/home" className={getLinkClasses("/home")}>
        <IconHome className={getIconClasses("/home")} />
      </Link>
      <Link to="/community" className={getLinkClasses("/community")}>
        <IconCommunity className={getIconClasses("/community")} />
      </Link>
      <Link to="/feed" className={getLinkClasses("/feed")}>
        <IconFeed className={getIconClasses("/feed")} />
      </Link>
      <Link to="/pin" className={getLinkClasses("/pin")}>
        <IconPlace className={getIconClasses("/pin")} />
      </Link>
    </div>
  );
};

export default withRouter(NavBar);
