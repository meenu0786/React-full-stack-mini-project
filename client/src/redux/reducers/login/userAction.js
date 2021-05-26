import { loginService } from "../../../services/loginServecies";
import {
  USERS_LOGIN_REQUEST,
  USERS_LOGOUT_REQUEST,
  USERS_LOGOUT_ERROR,
} from "./type";

export const login = (loginData) => {
  return (dispatch) => {
    loginService(loginData)
      .then((data) => {
        if (data.status == 1) {
          return dispatch({
            type: USERS_LOGIN_REQUEST,
            payload: {
              name: data.data.userName,
              token: data.token,
            },
          });
        } else {
          dispatch({
            type: USERS_LOGOUT_ERROR,
            payload: {},
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: USERS_LOGOUT_ERROR,
          payload: {},
        });
      });
  };
};
