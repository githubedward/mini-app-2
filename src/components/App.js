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
import MapContainer from "./Map/index";
import NavContainer from "./Nav/index";
import "./App.css";
// others

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token && !this.props.authenticated) {
      this.props.authenticateUser();
    }
    if (!token) {
      this.props.history.push("/");
    }
  }

  // shouldComponentUpdate(prevProps, nextProps) {
  //   return this.props !== nextState;
  // }

  render() {
    const token = localStorage.getItem("token");
    const { loading, authenticated } = this.props;
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
          <NavContainer />
          <MapContainer />
        </main>
      );
  }
}

const mapStateToProps = state => {
  const { loading } = state.global;
  const { authenticated } = state.user;
  return {
    loading,
    authenticated
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
