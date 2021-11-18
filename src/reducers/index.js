import { combineReducers } from 'redux';
import students from "./students";

export default combineReducers({
    students,
});

/*
import { combineReducers } from "redux";
import tutorials from "./tutorials";
import auth from "./auth";

export default combineReducers({
  tutorials,
  auth
});

for example if using auth also
 */