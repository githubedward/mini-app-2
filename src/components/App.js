import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// state - actions
import { toggleGlobalLoaderAction } from "../actions/global.actions";
import { authenticateUserAction } from "../actions/user.actions";
// components/styles
import RegAuth from "../components/RegAuth/index";
import GlobalLoader from "./shared/GlobalLoader";
import Map from "./Map/index";
import Nav from "./Nav/index";
import "./App.css";
// others

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token && !this.props.user.authenticated) {
      this.props.authenticateUser();
    }
    if (!token) {
      this.props.history.push("/");
    }
  }

  // shouldComponentUpdate(prevState, nextState) {
  //   return this.props !== nextState;
  // }

  render() {
    const token = localStorage.getItem("token");
    const { loading } = this.props;
    const { authenticated } = this.props.user;
    if (loading) return <GlobalLoader loading={loading} />;
    if (!token)
      return (
        <div>
          <RegAuth />
        </div>
      );
    if (token && !authenticated) return null;
    // return main page
    else
      return (
        <main className="App">
          <Nav />
          <Map />
        </main>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleGlobalLoaderAction: bool => dispatch(toggleGlobalLoaderAction(bool)),
    authenticateUser: () => {
      ownProps.history.push("/places");
      dispatch(authenticateUserAction());
    }
  };
};

App.propTypes = {
  toggleGlobalLoaderAction: PropTypes.func.isRequired,
  authenticateUser: PropTypes.func.isRequired,

  loading: PropTypes.bool.isRequired,
  user: PropTypes.shape({
    authenticated: PropTypes.bool.isRequired,
    fullname: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  })
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
