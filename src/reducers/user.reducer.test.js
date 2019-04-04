import deepFreeze from "deep-freeze";
import userReducer from "./user.reducer";
import * as types from "../actions/user.types";
import { initialState } from "./user.reducer";

deepFreeze(initialState);

describe("user reducer", () => {
  it("should return initial state when action is undefined", () => {
    expect(userReducer(initialState, undefined)).toEqual(initialState);
  });
  it("should return correct data when user authentication is successful", () => {
    const response = {
      error: "",
      fullname: "Full Test",
      id: 23,
      updatedAt: "Number",
      username: "Full Test"
    };
    const action = {
      type: types.AUTHENTICATE_USER_SUCCESS,
      response
    };
    const nextState = {
      ...initialState,
      ...action.response,
      authenticated: true
    };
    expect(userReducer(initialState, action)).toEqual(nextState);
  });

  it("should return an error when user auth is rejected", () => {
    const error = "Some error";
    const action = {
      type: types.AUTHENTICATE_USER_ERROR,
      error
    };
    const nextState = {
      ...initialState,
      ...action.error
    };
    expect(userReducer(initialState, action)).toEqual(nextState);
  });
});
