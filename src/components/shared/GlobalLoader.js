import React from "react";
import { CircleLoader } from "react-spinners";
import styles from "./GlobalLoader.module.css";

const GlobalLoader = ({ loading }) => {
  return (
    <div className={styles.container}>
      <CircleLoader
        sizeUnit={"px"}
        size={75}
        color={"#fd545f"}
        loading={loading}
      />
      {/* <div className={styles.text}>Loading</div> */}
    </div>
  );
};

export default GlobalLoader;
