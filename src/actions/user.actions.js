import * as types from "./user.types";

// sync action creators
export const authenticate = () => {
  return {
    type: types.AUTHENTICATED
  };
};
