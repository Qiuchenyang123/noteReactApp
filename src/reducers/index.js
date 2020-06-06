import { combineReducers } from "redux";
import userReducer from './userReducer';
import articleReducer from "./articleReducer";
const reducers = Object.assign({}, userReducer, articleReducer);

const appReducer = combineReducers(reducers);

export default appReducer