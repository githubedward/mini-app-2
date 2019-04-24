import { call, put } from "redux-saga/effects";
import placesApi from "../services/places.services";
import * as types from "../actions/places.types";

export function* addPlace(data) {
  try {
    const response = yield call(placesApi.addPlace(data));
    yield put({ type: types.ADD_PLACE_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.ADD_PLACE_FAILURE, error });
  }
}

export function* getAllPlaces() {
  try {
    const response = yield call(placesApi.getAllPlaces);
    yield put({ type: types.GET_ALL_PLACES_SUCCESS, response });
  } catch (error) {
    yield put({ type: types.GET_ALL_PLACES_FAILURE, error });
  }
}
