import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [createLogger(), sagaMiddleware];
const middlewareEnhancers = applyMiddleware(...middlewares);
const storeEnhancers = [middlewareEnhancers];
const composedEnhancers = compose(...storeEnhancers);

export default function configureStore() {
  return {
    ...createStore(rootReducer, composedEnhancers),
    runSaga: sagaMiddleware.run(rootSaga)
  };
}
