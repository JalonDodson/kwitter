import api from "../../utils/api";

export const USERS = "USERS";
export const USER = "USER";
export const USER_PHOTO = "USER_PHOTO";
export const ADD_PHOTO = "ADD_PHOTO";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const GET_MESSAGES = "GET_MESSAGES";
export const USER_MESSAGES = "USER_MESSAGES";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

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
    console.log(payload);
    return payload;
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
    console.log(err, "yes, it's an error");
  }
};

export const addMessage = (message) => async (dispatch, getState) => {
  try {
    const payload = await api.createMessage(message);
    dispatch({ type: ADD_MESSAGE, payload });

    console.log(message);
  } catch (err) {
    console.log(err, "sorry, you have an error bud.");
  }
};

export const getMessages = () => async (dispatch, getState) => {
  try {
    const payload = await api.getMessages();
    dispatch({ type: GET_MESSAGES, payload });

    console.log({ payload });
  } catch (err) {
    console.log(err, "sorry, broski you have an error");
  }
};

export const deleteMessage = (id) => async (dispatch, getState) => {
  try {
    const payload = await api.deleteMessage(id);
    dispatch ({ type: DELETE_MESSAGE, payload });

    console.log("Message successfully deleted.");
  } catch (err) {
    console.log("Do you have authorization to delete this message, fam?");
  }
}

export const userMessages = (username) => async (dispatch, getState) => {
  try {
    const payload = await api.userMessages(username);
    dispatch({ type: USER_MESSAGES, payload });

    console.log({ payload });
  } catch (err) {
    console.log(err, "damn, dog. u got an error");
  }
};
