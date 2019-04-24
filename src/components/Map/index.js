import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "./MapGroup/Map";
// state
import {
  showInfoBoxAction,
  closeInfoBoxAction,
  addPlaceAction,
  getAllPlaces
} from "../../actions/places.actions";

class index extends Component {
  render() {
    return <Map {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { places, user } = state;
  return {
    user_id: user.id,
    places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showInfoBoxAction: place => dispatch(showInfoBoxAction(place)),
    closeInfoBoxAction: () => dispatch(closeInfoBoxAction()),
    addPlaceAction: place => dispatch(addPlaceAction(place)),
    getAllPlaces: () => dispatch(getAllPlaces())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
