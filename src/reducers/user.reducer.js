import {
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_ERROR,
  LOGOUT
} from "../actions/user.types";

// NOTE: signup and login are handled with local state

export const initialState = {
  id: null,
  authenticated: false,
  error: "",
  fullname: "",
  logins: {
    username: ""
  },
  updatedAt: ""
};

export default function user(state = initialState, action) {
  if (!action) return state;
  switch (action.type) {
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        ...action.response,
        authenticated: true
      };
    case AUTHENTICATE_USER_ERROR:
      return {
        ...state,
        ...action.error,
        authenticated: false
      };
    case LOGOUT:
      return {
        ...state,
        authenticated: false
      };
    default:
      return state;
  }
}
