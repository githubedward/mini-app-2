import { fork } from "redux-saga/effects";
import { watchUserSaga, watchPlacesSaga } from "./watchers";

export default function* root() {
  yield fork(watchUserSaga);
  yield fork(watchPlacesSaga);
}
