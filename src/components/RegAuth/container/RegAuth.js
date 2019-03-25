import React from "react";
import LoginForm from "../Forms/LoginForm/LoginForm";
import SignupForm from "../Forms/SignupForm";
import styles from "./regAuth.module.css";
import { isEntityName } from "typescript";

const RegAuth = props => {
  return (
    <section className={styles.background}>
      <div className={styles.container}>
        <LoginForm {...props} />
        <SignupForm {...props} />
      </div>
    </section>
  );
};

export default RegAuth;
