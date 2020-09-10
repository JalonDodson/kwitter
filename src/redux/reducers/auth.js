import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GOOGLE_LOGIN,
  GOOGLE_SUCCESS,
  LOGOUT,
  REGISTER,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  isAuthenticated: false,
  username: "",
  password: "",
  loading: false,
  error: "",
  googleAuth: {
    code: "",
    scope: "",
  }
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case GOOGLE_LOGIN:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case REGISTER:
      return {
        ...INITIAL_STATE,
        loading: true,
      };
    case REGISTER_FAIL:
      return {
        ...INITIAL_STATE,
        loading: false,
      };
    case REGISTER_SUCCESS:
      return {
        ...INITIAL_STATE,
        loading: false,
      };
    case LOGIN_SUCCESS:
      const { username, token } = action.payload;
      return {
        ...INITIAL_STATE,
        isAuthenticated: token,
        username,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...INITIAL_STATE,
        error: action.payload,
        loading: false,
      };
    case GOOGLE_SUCCESS:
      const { code, scope } = action.payload;
      return {
        ...INITIAL_STATE,
        googleAuth: code,
        scope,
        loading: false,
      };
    case LOGOUT:
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};
