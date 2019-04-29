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
import { getCommunityAction } from "../../actions/community.actions";
import communityApi from "../../services/community.services";

class index extends Component {
  // componentDidMount() {
  //   this.props.getCommunityAction();
  // }

  render() {
    return <Container {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { user, places, community } = state;
  return {
    user,
    places,
    community
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      localStorage.removeItem("token");
      dispatch(logout());
      ownProps.history.push("/");
    },
    getCommunityAction: async () => {
      const community = await communityApi.getCommunity();
      dispatch(getCommunityAction(community));
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
