import { combineReducers } from "redux";
import user from "./user.reducer";
import global from "./global.reducer";
import places from "./places.reducer";
import community from "./community.reducer";

const rootReducer = combineReducers({ user, global, places, community });

export default rootReducer;
