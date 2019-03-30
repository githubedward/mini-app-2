import React, { Component } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import axios from "axios";
import styles from "./FormContainer.module.css";
import * as helper from "../../../utils/functions";

const API_URL = process.env.REACT_APP_DEV_API_URL;
const SIGNUP_URL = `${API_URL}/register`;
const LOGIN_URL = `${API_URL}/login`;

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signupInput: {
        username: "",
        password: "",
        fullname: ""
      },
      loginInput: {
        username: "",
        password: ""
      },
      isFocus: {
        isSignupFocus: false,
        isLoginFocus: false
      },
      signupError: {},
      loginError: {}
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  handleSignup = async data => {
    await helper.delay(500);
    try {
      const resp = await axios.post(SIGNUP_URL, data);
      const { username } = resp.data;
      this.setState({
        ...this.state,
        loginInput: {
          ...this.state.loginInput,
          username: username,
          password: ""
        },
        isFocus: {
          isSignupFocus: false,
          isLoginFocus: false
        }
      });
    } catch (err) {
      const error = err.response.data.errors[0];
      const signupError = {
        [error.path]: true,
        message: error.message
      };
      this.setState({
        ...this.state,
        signupError
      });
    }
  };

  handleLogin = async data => {
    await helper.delay(500);
    try {
      const resp = await axios.post(LOGIN_URL, data);
      localStorage.setItem("token", resp.data.token);
    } catch (err) {
      this.setState({
        loginError: err.response.data.errors[0].message
      });
    }
  };

  // reset login inputs and disable login btn when signup input is onfocus
  handleSignupFocus = () => {
    if (!this.state.isFocus.isSignupFocus) {
      this.setState({
        ...this.state,
        isFocus: {
          isSignupFocus: true,
          isLoginFocus: false
        },
        loginInput: {
          username: "",
          password: ""
        },
        loginError: ""
      });
    }
  };

  // reset signup inputs and disable signup btn when login input is onfocus
  handleLoginFocus = () => {
    if (!this.state.isFocus.isLoginFocus) {
      this.setState({
        ...this.state,
        isFocus: {
          isSignupFocus: false,
          isLoginFocus: true
        },
        isSignupFocus: {
          username: "",
          password: "",
          fullname: ""
        },
        signupError: ""
      });
    }
  };

  render() {
    console.log("render!");
    const {
      loginInput,
      signupInput,
      isFocus,
      signupError,
      loginError
    } = this.state;
    return (
      <section className={styles.background}>
        <div className={styles.container}>
          <LoginForm
            onSubmit={this.handleLogin}
            user={loginInput}
            isFocus={isFocus}
            asyncError={loginError}
            handleLoginFocus={this.handleLoginFocus}
          />
          <SignupForm
            onSubmit={this.handleSignup}
            user={signupInput}
            isFocus={isFocus}
            asyncError={signupError}
            handleSignupFocus={this.handleSignupFocus}
          />
        </div>
      </section>
    );
  }
}

export default FormContainer;
