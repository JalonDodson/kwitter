import api from "../../utils/api";

export const USERS = "USERS";
export const USER = "USER";
export const USER_PHOTO = "USER_PHOTO";
export const ADD_PHOTO = "ADD_PHOTO";

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

    dispatch({ type: USER, payload });
  } catch (err) {
    console.log(err);
  }
};

export const getPhoto = (username) => async (dispatch, getState) => {
  try {
    const payload = await api.getPhoto(username);

    dispatch({ type: USER_PHOTO, payload });
  } catch (err) {
    console.log(err);
  }
};

export const addPhoto = (username, photo) => async (dispatch, getState) => {
  try {
    const payload = await api.addPhoto(username, photo);
    dispatch({ type: ADD_PHOTO, payload });

    console.log({ payload });
  } catch (err) {
    console.log(err, "yes, it's an error")
  }
}
