import * as types from "./community.types";

export const getCommunityAction = community => {
  return { type: types.GET_COMMUNITY, community };
};
