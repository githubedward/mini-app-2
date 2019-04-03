import { combineReducers } from "redux";
import user from "./user.reducer";
import global from "./global.reducer";

const rootReducer = combineReducers({ user, global });

export default rootReducer;
