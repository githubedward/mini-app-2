import {
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_ERROR
} from "../actions/user.types";

// NOTE: registration and login is handled with local state

export default function user(
  state = { authenticated: false, fullname: "" },
  action
) {
  const response = action.response;
  if (!action) return state;
  switch (action.type) {
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        authenticated: true,
        ...response
      };
    case AUTHENTICATE_USER_ERROR:
      return {
        ...state,
        authenticated: false,
        ...response
      };
    default:
      return state;
  }
}
