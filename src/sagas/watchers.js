import { takeEvery } from "redux-saga/effects";
import * as types from "../actions/user.types";
import * as userSaga from "./user.sagas";

export function* watchUserSaga() {
  yield takeEvery(types.AUTHENTICATE_USER, userSaga.authenticateUser);
}
