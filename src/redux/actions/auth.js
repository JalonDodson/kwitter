import api from "../../utils/api";

// AUTH CONSTANTS
export const LOGIN = "AUTH/LOGIN";
export const LOGIN_SUCCESS = "AUTH/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "AUTH/LOGIN_FAILURE";
export const GOOGLE_LOGIN = "AUTH/GOOGLE_LOGIN";
export const GOOGLE_SUCCESS = "AUTH/GOOGLE_SUCCESS";
export const LOGOUT = "AUTH/LOGOUT";
export const REGISTER = "AUTH/REGISTER";
export const REGISTER_FAIL = "AUTH/REGISTER_FAIL";
export const REGISTER_SUCCESS = "AUTH/REGISTER_SUCCESS";

/*
 AUTH ACTIONS (this is a thunk....)
 THUNKS: --> https://github.com/reduxjs/redux-thunk#whats-a-thunk
 If you need access to your store you may call getState()
*/
export const login = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: LOGIN });
    const payload = await api.login(credentials);
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: LOGIN_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};

export const googleLogin = () => async (dispatch) => {
  try {
    dispatch({ type: GOOGLE_LOGIN });

    const payload = await api.googleLogin();
    console.log(payload);
    // dispatch ({ type: GOOGLE_SUCCESS, payload });
  } catch (err) {
    console.log(err)
  }
}

export const logout = () => async (dispatch, getState) => {
  try {
    // We do not care about the result of logging out
    // as long as it succeeds
    await api.logout();
  } catch (err) {
      console.log(err.message);
  } finally {
    /**
     * Let the reducer know that we are logged out
     */
    dispatch({ type: LOGOUT });
  }
};

export const register = (credentials) => async (dispatch, getState) => {
  try {
    dispatch({ type: REGISTER });
    const payload = await api.register(credentials);
    console.log({ payload })
    // ℹ️ℹ️This is how you woud debug the response to a requestℹ️ℹ️
    // console.log({ result })
    dispatch({ type: REGISTER_SUCCESS, payload });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
// END AUTH ACTIONS
