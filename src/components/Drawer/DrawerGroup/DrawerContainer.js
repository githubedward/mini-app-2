import React from "react";
import { Link } from "react-router-dom";
// components
import Nav from "./Nav";
import Routes from "./Routes";
import IconArrowForw from "../../shared-components/IconArrowForw";
import styles from "./styles/DrawerContainer.module.css";

const Container = props => {
  if (props.location.pathname === "/")
    return (
      <Link className={styles.icon} to="/places">
        <IconArrowForw className={styles.icon_forward} />
      </Link>
    );

  return (
    <section className={styles.container}>
      <Nav {...props} />
      <Routes {...props} />
    </section>
  );
};

export default Container;
