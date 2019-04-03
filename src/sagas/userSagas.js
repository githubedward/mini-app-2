import { call, put } from "redux-saga/effects";
import Api from "../services/index";
import { toggleGlobalLoaderAction } from "../actions/global.actions";
// import { authenticateUserAction } from "../actions/user.actions";
import * as userTypes from "../actions/user.types";
// import * as helper from "../utils/functions";

export function* authenticateUser() {
  try {
    yield put(toggleGlobalLoaderAction(true));
    const response = yield call(Api.authenticateUser);
    yield put({ type: userTypes.AUTHENTICATE_USER_SUCCESS, response });
    yield put(toggleGlobalLoaderAction(false));
  } catch (error) {
    yield put({ type: userTypes.AUTHENTICATE_USER_ERROR, error });
  }
}
