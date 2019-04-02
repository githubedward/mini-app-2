import { call, put } from "redux-saga/effects";
import Api from "../services/index";
// import { toggleGlobalLoader } from "../actions/global.actions";
// import { authenticateUserAction } from "../actions/user.actions";
import * as userTypes from "../actions/user.types";
// import * as globalTypes from "../actions/global.types";

export function* authenticateUser() {
  try {
    const response = yield call(Api.authenticateUser);
    yield put({ type: userTypes.AUTHENTICATE_USER_SUCCESS, response });
  } catch (err) {
    yield put({ type: userTypes.AUTHENTICATE_USER_ERROR, err });
  }
}
