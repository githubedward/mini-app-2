import {
  SHOW_ACTIVE_PLACE,
  SHOW_HOVER_PLACE,
  CLOSE_INFOBOX,
  ADD_PLACE,
  GET_ALL_PLACES
} from "../actions/places.types";

export const initialPlacesState = {
  data: [],
  error: null,
  placeInfo: null,
  activePlaceInfo: null
};

export default function places(state = initialPlacesState, action) {
  if (!action) return state;
  switch (action.type) {
    case SHOW_HOVER_PLACE:
      return {
        ...state,
        placeInfo: action.place
      };
    case SHOW_ACTIVE_PLACE:
      return {
        ...state,
        activePlaceInfo: action.place,
        placeInfo: null
      };
    case CLOSE_INFOBOX:
      return {
        ...state,
        placeInfo: null,
        activePlaceInfo: null
      };
    case ADD_PLACE:
      return {
        ...state,
        data: state.data.concat({ ...action.payload })
      };
    case GET_ALL_PLACES:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
