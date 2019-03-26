import { combineReducers } from "redux";
import regAuth from "./regAuth/regAuth.reducers";

const rootReducer = combineReducers({ regAuth });

export default rootReducer;
