import { call, put } from "redux-saga/effects";
import authApi from "../services/auth.services";
import { toggleGlobalLoaderAction } from "../actions/global.actions";
import * as types from "../actions/user.types";

export function* authenticateUser() {
  try {
    yield put(toggleGlobalLoaderAction(true));
    const response = yield call(authApi.authenticateUser);
    yield put({ type: types.AUTHENTICATE_USER_SUCCESS, response });
    yield put(toggleGlobalLoaderAction(false));
  } catch (error) {
    yield put({ type: types.AUTHENTICATE_USER_ERROR, error });
  }
}
