import React, { Component } from "react";
// component/styles
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import styles from "./FormContainer.module.css";
// others
import * as helper from "../../../utils/functions";
import Api from "../../../services/index";

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
      asyncSignupError: {},
      asyncLoginError: {}
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state !== nextState;
  }

  handleSignup = async data => {
    await helper.delay(500);
    try {
      // const resp = await axios.post(SIGNUP_URL, data);
      const resp = await Api.signup(data);
      const { username } = resp;
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
      const asyncSignupError = {
        [error.path]: true,
        message: error.message
      };
      this.setState({
        ...this.state,
        asyncSignupError
      });
    }
  };

  handleLogin = async data => {
    await helper.delay(500);
    try {
      // const resp = await axios.post(LOGIN_URL, data);
      const resp = await Api.login(data);
      localStorage.setItem("token", resp.token);
      this.props.authenticateUserAction();
    } catch (err) {
      this.setState({
        ...this.state,
        asyncLoginError: err.response.data
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
        asyncLoginError: {}
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
        asyncSignupError: {}
      });
    }
  };

  render() {
    const {
      loginInput,
      signupInput,
      isFocus,
      asyncSignupError,
      asyncLoginError
    } = this.state;
    return (
      <section className={styles.background}>
        <div className={styles.logo}>MapSocial</div>
        <div className={styles.container}>
          <LoginForm
            onSubmit={this.handleLogin}
            user={loginInput}
            isFocus={isFocus}
            asyncError={asyncLoginError}
            handleLoginFocus={this.handleLoginFocus}
          />
          <SignupForm
            onSubmit={this.handleSignup}
            user={signupInput}
            isFocus={isFocus}
            asyncError={asyncSignupError}
            handleSignupFocus={this.handleSignupFocus}
          />
        </div>
      </section>
    );
  }
}

export default FormContainer;
