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

export const addPlaceAction = place => {
  return {
    type: types.ADD_PLACE,
    place
  };
};

export const getUserPlaceAction = () => {
  return {
    type: types.GET_USER_PLACES
  };
};

export const getAllPlaces = () => {
  return {
    type: types.GET_ALL_PLACES
  };
};
