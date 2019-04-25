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
import placesApi from "../../services/places.services";

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
    addPlaceAction: async place => {
      const payload = await placesApi.addPlace(place);
      dispatch(addPlaceAction(payload));
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
