import * as types from "./places.types";

export const showInfoBoxAction = place => {
  return {
    type: types.SHOW_INFOBOX,
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
