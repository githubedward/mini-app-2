import React, { Component } from "react";
import LoginForm from "./LoginForm/LoginForm";
import SignupForm from "./SignupForm/SignupForm";
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
      asyncError: ""
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(this.state, nextState, nextProps);
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
      const asyncError = {
        [error.path]: true,
        message: error.message
      };
      this.setState({
        ...this.state,
        asyncError
      });
    }
  };

  handleLogin = async data => {
    await helper.delay(500);
    try {
      const resp = await axios.post(LOGIN_URL, data);
      console.log(resp.data);
    } catch (err) {
      console.log(err.response);
    }
  };

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
        asyncError: ""
      });
    }
  };

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
        asyncError: ""
      });
    }
  };

  render() {
    console.log("render!");
    const { loginInput, signupInput, isFocus, asyncError } = this.state;
    return (
      <section className={styles.background}>
        <div className={styles.container}>
          <LoginForm
            onSubmit={this.handleLogin}
            user={loginInput}
            isFocus={isFocus}
            asyncError={asyncError}
            handleLoginFocus={this.handleLoginFocus}
          />
          <SignupForm
            onSubmit={this.handleSignup}
            user={signupInput}
            isFocus={isFocus}
            asyncError={asyncError}
            handleSignupFocus={this.handleSignupFocus}
          />
        </div>
      </section>
    );
  }
}

export default FormContainer;
