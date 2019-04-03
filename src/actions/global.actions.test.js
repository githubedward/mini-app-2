import * as types from "./global.types";
import * as actions from "./global.actions";

describe("global actions", () => {
  it("should toggle global loader", () => {
    const bool = false;
    const expectedAction = {
      type: types.TOGGLE_GLOBAL_LOADER,
      bool
    };
    expect(actions.toggleGlobalLoaderAction(bool)).toEqual(expectedAction);
  });
});
