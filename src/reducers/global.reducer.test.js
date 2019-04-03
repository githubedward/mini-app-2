import globalReducer from "./global.reducer";
import * as types from "../actions/global.types";
import deepFreeze from "deep-freeze";
import { initialState } from "./global.reducer";

describe("global reducers", () => {
  deepFreeze(initialState);

  it("should return initial state when action is undefined", () => {
    expect(globalReducer(initialState, undefined)).toEqual(initialState);
  });

  it("should toggle global loader", () => {
    // toggle true
    let bool = true;
    let action = {
      type: types.TOGGLE_GLOBAL_LOADER,
      bool
    };
    let nextState = {
      ...initialState,
      loading: bool
    };
    expect(globalReducer(initialState, action)).toEqual(nextState);
    // toggle false
    bool = false;
    action = {
      type: types.TOGGLE_GLOBAL_LOADER,
      bool
    };
    nextState = {
      ...initialState,
      loading: bool
    };
    expect(globalReducer(initialState, action)).toEqual(nextState);
  });
});
