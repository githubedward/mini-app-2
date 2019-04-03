import * as types from "./global.types";

export const toggleGlobalLoaderAction = bool => {
  return {
    type: types.TOGGLE_GLOBAL_LOADER,
    bool
  };
};
