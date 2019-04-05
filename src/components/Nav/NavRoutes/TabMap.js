import React from "react";
// components/styles
import styles from "./NavRoutes.module.css";
import IconArrowBack from "../../shared/IconArrowBack";
import IconAddLocation from "./Icons/IconAddLocation";
import IconSearch from "./Icons/IconSearch";

const Pin = ({ history }) => {
  return (
    <div className={styles.map_tools}>
      <div className={styles.map_tools__inactive}>
        <IconSearch />
        <IconAddLocation />
      </div>
    </div>
  );
};

export default Pin;
