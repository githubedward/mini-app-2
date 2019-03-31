import React from "react";
import { GridLoader } from "react-spinners";
import styles from "./GlobalLoader.module.css";

const GlobalLoader = ({ loading }) => {
  return (
    <div className={styles.container}>
      <GridLoader
        sizeUnit={"px"}
        size={25}
        color={"#fd545f"}
        loading={loading}
      />
      <div className={styles.text}>Loading</div>
    </div>
  );
};

export default GlobalLoader;
