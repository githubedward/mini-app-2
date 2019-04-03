import * as types from "./user.types";
import * as actions from "./user.actions";

describe("user actions", () => {
  it("should authenticate user", () => {
    const expectedAction = {
      type: types.AUTHENTICATE_USER
    };
    expect(actions.authenticateUserAction()).toEqual(expectedAction);
  });
});
