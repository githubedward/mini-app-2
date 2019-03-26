import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";
import styles from "./container.module.css";

const RegAuth = props => {
  return (
    <section className={styles.background}>
      <div className={styles.container}>
        <LoginForm {...props} onSubmit={e => e.preventDefault()} />
        <SignupForm {...props} onSubmit={e => e.preventDefault()} />
      </div>
    </section>
  );
};

export default RegAuth;
