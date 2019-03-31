import { AUTHENTICATED } from "../actions/user.types";

export default function user(
  state = { authenticated: false, fullname: "" },
  action
) {
  if (!action) return state;
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    default:
      return state;
  }
}
