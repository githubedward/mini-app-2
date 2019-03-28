import React, { Component } from "react";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";
import styles from "./FormContainer.module.css";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      fullname: "",
      isSignupFocus: false,
      isLoginFocus: false
    };
  }

  handleSubmit = values => {
    alert(JSON.stringify(values));
  };

  handleSignupFocus = () => {
    if (!this.state.isSignupFocus) {
      this.setState({
        isSignupFocus: true,
        isLoginFocus: false
      });
    }
  };

  handleLoginFocus = () => {
    if (!this.state.isLoginFocus) {
      this.setState({
        isSignupFocus: false,
        isLoginFocus: true
      });
    }
  };

  render() {
    return (
      <section className={styles.background}>
        <div className={styles.container}>
          <LoginForm
            onSubmit={this.handleSubmit}
            user={this.state}
            handleLoginFocus={this.handleLoginFocus}
          />
          <SignupForm
            onSubmit={this.handleSubmit}
            user={this.state}
            handleSignupFocus={this.handleSignupFocus}
          />
        </div>
      </section>
    );
  }
}

export default FormContainer;
