import React, { Component } from "react";
import { connect } from "react-redux";
// state
import { toggleGlobalLoader } from "../actions/global.actions";
import { authenticate } from "../actions/user.actions";
// components/styles
import RegAuth from "../components/RegAuth/index";
import GlobalLoader from "./shared/GlobalLoader";
import "./App.css";
// others
import { delay } from "../utils/functions";

class App extends Component {
  async componentDidMount() {
    const token = localStorage.getItem("token");
    if (!token) return null;
    else {
      const { toggleGlobalLoader, authenticate } = this.props;
      toggleGlobalLoader(true);
      await delay(2000);
      authenticate();
      toggleGlobalLoader(false);
    }
  }

  async componentDidUpdate() {
    console.log("updated!", this.props);
    const token = localStorage.getItem("token");
    const { toggleGlobalLoader } = this.props;
    try {
      const { authenticate } = this.props;
      const { authenticated } = this.props.user;
      if (token && !authenticated) {
        await delay(2000);
        authenticate();
        toggleGlobalLoader(false);
      }
    } catch {
      toggleGlobalLoader(false);
    }
  }

  shouldComponentUpdate(prevState, nextState) {
    return this.props !== nextState;
  }

  render() {
    const { loading } = this.props;
    const { authenticated } = this.props.user;
    if (loading) return <GlobalLoader loading={loading} />;
    if (authenticated) return <h1>Welcome!</h1>;
    return (
      <div className="App">
        <RegAuth />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { loading } = state.global;
  const { user } = state;
  return {
    loading,
    user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleGlobalLoader: bool => dispatch(toggleGlobalLoader(bool)),
    authenticate: () => dispatch(authenticate())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
