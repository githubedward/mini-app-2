import React from "react";
import { Link } from "react-router-dom";
// components
import NavBar from "./NavBar";
import NavRoutes from "./NavRoutes";
import IconArrowForw from "../../shared-components/IconArrowForw";
import styles from "./NavContainer.module.css";

const NavContainer = props => {
  if (props.location.pathname === "/")
    return (
      <Link className={styles.icon} to="/places">
        <IconArrowForw className={styles.icon_forward} />
      </Link>
    );

  return (
    <section className={styles.container}>
      <NavBar {...props} />
      <NavRoutes {...props} />
    </section>
  );
};

export default NavContainer;
