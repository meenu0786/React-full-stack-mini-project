const initialState = {
  token: null,
  name: null,
  lodaer: false,
  error: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.token,
      };
    }
    case "LOGOUT": {
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
