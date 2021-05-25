import { combineReducers } from "redux";
import loginReducer from "./reducers/login/loginReducer";

const rootReducer = combineReducers({
  userLogin: loginReducer,
});

export default rootReducer;
