import { combineReducers } from "redux";
import user from "./user.reducers";
import global from "./global.reducers";

const rootReducer = combineReducers({ user, global });

export default rootReducer;
