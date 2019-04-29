import { GET_COMMUNITY } from "../actions/community.types";

export default function community(state = null, action) {
  if (!action) return state;
  switch (action.type) {
    case GET_COMMUNITY:
      return action.community;
    default:
      return state;
  }
}
