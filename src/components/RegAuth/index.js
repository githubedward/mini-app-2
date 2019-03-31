import React, { Component } from "react";
import { connect } from "react-redux";
import RegAuth from "./Forms/FormContainer";
import { toggleGlobalLoader } from "../../actions/global.actions";

class index extends Component {
  render() {
    const { props } = this;
    return <RegAuth {...props} />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleGlobalLoader: bool => dispatch(toggleGlobalLoader(bool))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(index);
