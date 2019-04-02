import { takeLatest } from "redux-saga/effects";
import * as types from "../actions/user.types";
import { authenticateUser } from "./userSaga";

export function* watchUserSaga() {
  yield takeLatest(types.AUTHENTICATE_USER, authenticateUser);
}
