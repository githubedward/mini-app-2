import {
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_ERROR
} from "../actions/user.types";

// NOTE: signup and login are handled with local state

export const initialState = {
  active: false,
  error: "",
  fullname: "",
  id: null,
  updatedAt: "",
  username: ""
};

export default function user(state = initialState, action) {
  if (!action) return state;
  switch (action.type) {
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        ...action.response,
        active: true
      };
    case AUTHENTICATE_USER_ERROR:
      return {
        ...state,
        ...action.error,
        active: false
      };
    default:
      return state;
  }
}
