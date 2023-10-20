import { combineReducers } from "redux";
import crypto from "./cryptoReducer";

const reducers = combineReducers({
  crypto,
});

export default reducers;
