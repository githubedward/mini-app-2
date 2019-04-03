import { TOGGLE_GLOBAL_LOADER } from "../actions/global.types";

export const initialState = {
  loading: false
};

export default function global(state = initialState, action) {
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
