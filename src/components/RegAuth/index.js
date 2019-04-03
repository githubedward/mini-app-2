import React, { Component } from "react";
import { connect } from "react-redux";
import RegAuth from "./Forms/FormContainer";
import { toggleGlobalLoaderAction } from "../../actions/global.actions";
import { authenticateUserAction } from "../../actions/user.actions";

class index extends Component {
  render() {
    const { props } = this;
    return <RegAuth {...props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleGlobalLoaderAction: bool => dispatch(toggleGlobalLoaderAction(bool)),
    authenticateUserAction: () => dispatch(authenticateUserAction())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(index);
