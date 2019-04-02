import * as types from "./user.types";

// NOTE: registration and login is handled with local state

// sync action creators
export const authenticateUserAction = () => {
  return {
    type: types.AUTHENTICATE_USER
  };
};
