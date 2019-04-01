import React, { Component } from "react";
import { Link } from "react-router-dom";
// components/styles
import IconCommunity from "./IconCommunity";
import IconFeed from "./IconFeed";
import IconHome from "./IconHome";
import IconPlace from "./IconPlace";
import styles from "./NavBar.module.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Link to="/home">
          <IconHome className={styles.icons} />
        </Link>
        <Link to="/community">
          <IconCommunity className={styles.icons} />
        </Link>
        <Link to="/feed">
          <IconFeed className={styles.icons} />
        </Link>
        <Link to="/place">
          <IconPlace className={styles.icons} />
        </Link>
      </div>
    );
  }
}
