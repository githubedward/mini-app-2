import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// state - actions
import { toggleGlobalLoader } from "../actions/global.actions";
import { authenticateUserAction } from "../actions/user.actions";
// components/styles
import RegAuth from "../components/RegAuth/index";
import GlobalLoader from "./shared/GlobalLoader";
import Map from "./Map/index";
import Nav from "./Nav/index";
import "./App.css";
// others
import { delay } from "../utils/functions";

class App extends Component {
  async componentDidMount() {
    const token = localStorage.getItem("token");
    const { toggleGlobalLoader } = this.props;
    if (!token) {
      toggleGlobalLoader(true);
      await delay(500);
      this.props.history.push("/");
      toggleGlobalLoader(false);
    } else {
      const { authenticateUserAction } = this.props;
      toggleGlobalLoader(true);
      await delay(500);
      authenticateUserAction();
      toggleGlobalLoader(false);
    }
  }

  async componentDidUpdate() {
    const token = localStorage.getItem("token");
    const { toggleGlobalLoader } = this.props;
    try {
      const { authenticateUserAction } = this.props;
      const { authenticated } = this.props.user;
      if (token && !authenticated) {
        await delay(500);
        authenticateUserAction();
        toggleGlobalLoader(false);
      }
    } catch {
      toggleGlobalLoader(false);
    }
  }

  // shouldComponentUpdate(prevState, nextState) {
  //   return this.props !== nextState;
  // }

  render() {
    console.log(this.props);
    const { loading } = this.props;
    const { authenticated } = this.props.user;
    if (loading) return <GlobalLoader loading={loading} />;
    if (authenticated)
      return (
        <main className="App">
          <Nav />
          <Map />
        </main>
      );
    return (
      <div>
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
    authenticateUserAction: () => dispatch(authenticateUserAction())
  };
};

App.propTypes = {
  toggleGlobalLoader: PropTypes.func.isRequired,
  authenticateUserAction: PropTypes.func.isRequired,

  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    fullname: PropTypes.string.isRequired
  })
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
