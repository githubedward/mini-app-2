import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RegAuth from "./Forms/FormContainer";
import { toggleGlobalLoaderAction } from "../../actions/global.actions";
import { authenticateUserAction } from "../../actions/user.actions";

class index extends Component {
  render() {
    const { props } = this;
    return <RegAuth {...props} />;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleGlobalLoaderAction: bool => dispatch(toggleGlobalLoaderAction(bool)),
    authenticateUserAction: () => {
      ownProps.history.push("/places");
      dispatch(authenticateUserAction());
    }
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(index)
);
