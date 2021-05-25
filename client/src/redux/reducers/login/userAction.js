import axios from "axios";
import { loginService } from "../../../services/loginServecies";
import { USERS_LOGIN_REQUEST, USERS_LOGOUT_REQUEST } from "./type";

export const login = () => {
  return (dispatch) => {
    loginService()
      .then((data) => {
        if (data.status == 1) {
          dispatch({
            type: USERS_LOGIN_REQUEST,
            payload: {
              name: data.userName,
              token: data.token,
            },
          });
        }
      })
      .catch((error) => {});
  };
};
