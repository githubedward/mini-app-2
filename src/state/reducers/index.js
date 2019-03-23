import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import regAuth from "./regAuth/regAuth.reducers";

const rootReducer = combineReducers({ regAuth, form: reduxFormReducer });

export default rootReducer;
