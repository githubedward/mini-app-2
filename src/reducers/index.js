import { combineReducers } from "redux";
import user from "./user.reducer";
import global from "./global.reducer";
import places from "./places.reducer";

const rootReducer = combineReducers({ user, global, places });

export default rootReducer;
