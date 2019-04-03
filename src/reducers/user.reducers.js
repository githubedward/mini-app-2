import {
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_ERROR
} from "../actions/user.types";

// NOTE: registration and login is handled with local state

const initialState = {
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
