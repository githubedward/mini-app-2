import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "./Map";
// state
import {
  showInfoBoxAction,
  closeInfoBoxAction
} from "../../actions/places.actions";

class index extends Component {
  render() {
    return <Map {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { places } = state;
  return {
    places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showInfoBoxAction: place => dispatch(showInfoBoxAction(place)),
    closeInfoBoxAction: () => dispatch(closeInfoBoxAction())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
