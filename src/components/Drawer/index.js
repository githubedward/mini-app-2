import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
// components/styles
import Container from "./DrawerGroup/DrawerContainer";
// state
import { logout } from "../../actions/user.actions";
import {
  showHoverPlaceAction,
  closeInfoBoxAction
} from "../../actions/places.actions";

class index extends Component {
  render() {
    return <Container {...this.props} />;
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
    showHoverPlaceAction: place => dispatch(showHoverPlaceAction(place)),
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
