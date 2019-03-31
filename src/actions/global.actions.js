import * as types from "./global.types";

export const toggleGlobalLoader = bool => {
  return {
    type: types.TOGGLE_GLOBAL_LOADER,
    bool
  };
};
