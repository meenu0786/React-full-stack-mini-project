import {
  USERS_LOGIN_REQUEST,
  USERS_LOGOUT_REQUEST,
  USERS_LOGOUT_ERROR,
} from "./type";

const initialState = {
  token: null,
  name: null,
  lodaer: false,
  error: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USERS_LOGIN_REQUEST": {
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.name,
      };
    }
    case "USERS_LOGOUT_ERROR": {
      return {
        ...state,
        token: null,
        name: null,
        lodaer: false,
        error: true,
      };
    }
    case "USERS_LOGOUT_ERROR": {
      return {
        ...state,
        token: null,
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
