import React, { Component } from "react";
import { connect } from "react-redux";
import Map from "./MapGroup/Map";
// state
import {
  showHoverPlaceAction,
  showActivePlaceAction,
  closeInfoBoxAction,
  getAllPlaces
} from "../../actions/places.actions";
import placesApi from "../../services/places.services";

class index extends Component {
  render() {
    return <Map {...this.props} />;
  }
}

const mapStateToProps = state => {
  const { places, user } = state;
  return {
    user: {
      id: user.id,
      fullname: user.fullname
    },
    places
  };
};

const mapDispatchToProps = dispatch => {
  return {
    showHoverPlaceAction: place => dispatch(showHoverPlaceAction(place)),
    showActivePlaceAction: place => dispatch(showActivePlaceAction(place)),
    closeInfoBoxAction: () => dispatch(closeInfoBoxAction()),
    addPlaceAction: async place => {
      await placesApi.addPlace(place);
      if (!place.pinned) {
        const places = await placesApi.getAllPlaces();
        dispatch(getAllPlaces(places));
      }
    },
    getAllPlaces: async () => {
      const payload = await placesApi.getAllPlaces();
      dispatch(getAllPlaces(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(index);
