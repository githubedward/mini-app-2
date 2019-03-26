import React, { Component } from "react";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";
import styles from "./container.module.css";

class RegAuth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      fullname: ""
    };
  }

  handleSubmit = values => {
    alert(values);
  };

  render() {
    const { props } = this;
    return (
      <section className={styles.background}>
        <div className={styles.container}>
          <LoginForm
            {...props}
            onSubmit={this.handleSubmit}
            user={this.state}
          />
          <SignupForm
            {...props}
            onSubmit={this.handleSubmit}
            user={this.state}
          />
        </div>
      </section>
    );
  }
}

export default RegAuth;
