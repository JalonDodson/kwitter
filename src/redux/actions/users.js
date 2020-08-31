import api from "../../utils/api";

export const USERS = "USERS";
export const USER = "USER";

export const users = () => async (dispatch, getState) => {
  try {
    const payload = await api.users();

    dispatch({ type: USERS, payload });
    console.log({ payload });
    return payload;
  } catch (err) {
    console.log(err);
  }
};

export const user = (username) => async (dispatch, getState) => {
  try {
    const payload = await api.user(username);
    
    dispatch ({ type: USER, payload });
  } catch (err) {
    console.log(err);
  }
};
