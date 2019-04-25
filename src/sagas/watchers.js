import { takeEvery } from "redux-saga/effects";
import * as userTypes from "../actions/user.types";
import * as userSaga from "./user.sagas";

export function* watchUserSaga() {
  yield takeEvery(userTypes.AUTHENTICATE_USER, userSaga.authenticateUser);
}
