import { fork } from "redux-saga/effects";
import { watchUserSaga } from "./watchers";

export default function* rootSaga() {
  yield fork(watchUserSaga);
}
