import { takeEvery } from "redux-saga/effects";
import * as userTypes from "../actions/user.types";
import * as placesTypes from "../actions/places.types";
import * as userSaga from "./user.sagas";
import * as placesSaga from "./places.sagas";

export function* watchUserSaga() {
  yield takeEvery(userTypes.AUTHENTICATE_USER, userSaga.authenticateUser);
}

export function* watchPlacesSaga() {
  yield takeEvery(placesTypes.ADD_PLACE, placesSaga.addPlace);
  yield takeEvery(placesTypes.GET_ALL_PLACES, placesSaga.getAllPlaces);
}
