import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// components/styles
import NavContainer from "./NavGroup/NavContainer";
// state
import { logout } from "../../actions/user.actions";
import {
  showInfoBoxAction,
  closeInfoBoxAction
} from "../../actions/places.actions";

class index extends Component {
  render() {
    return <NavContainer {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { user, places } = state;
  return {
    user,
    places
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      localStorage.removeItem("token");
      dispatch(logout());
      ownProps.history.push("/");
    },
    showInfoBoxAction: place => dispatch(showInfoBoxAction(place)),
    closeInfoBoxAction: () => dispatch(closeInfoBoxAction())
  };
};

index.propTypes = {
  logout: PropTypes.func.isRequired
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(index)
);
