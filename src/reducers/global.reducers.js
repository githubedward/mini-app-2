import { TOGGLE_GLOBAL_LOADER } from "../actions/global.types";

export default function global(
  state = {
    loading: false
  },
  action
) {
  if (!action) return state;
  switch (action.type) {
    case TOGGLE_GLOBAL_LOADER:
      return {
        ...state,
        loading: action.bool
      };
    default:
      return state;
  }
}
