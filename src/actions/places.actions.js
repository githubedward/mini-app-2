import * as types from "./places.types";

export const showHoverPlaceAction = place => {
  return {
    type: types.SHOW_HOVER_PLACE,
    place
  };
};

export const showActivePlaceAction = place => {
  return {
    type: types.SHOW_ACTIVE_PLACE,
    place
  };
};

export const closeInfoBoxAction = () => {
  return {
    type: types.CLOSE_INFOBOX
  };
};

export const addPlaceAction = payload => {
  return {
    type: types.ADD_PLACE,
    payload
  };
};

export const getAllPlaces = payload => {
  return {
    type: types.GET_ALL_PLACES,
    payload
  };
};

export const getUserPlaceAction = () => {
  return {
    type: types.GET_USER_PLACES
  };
};
