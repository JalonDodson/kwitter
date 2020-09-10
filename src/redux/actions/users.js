import api from "../../utils/api";

export const USERS = "USERS";
export const USER = "USER";
// export const USER_PHOTO = "USER_PHOTO";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const ADD_CURRENT_MESSAGE = "ADD_CURRENT_MESSAGE";

export const GET_MESSAGES = "GET_MESSAGES";
export const USER_MESSAGES = "USER_MESSAGES";

export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const DELETE_CURRENT_MESSAGE = "DELETE_CURRENT_MESSAGE";

export const LIKE_USER_MESSAGE = "LIKE_USER_MESSAGE";
export const UNLIKE_USER_MESSAGE = "UNLIKE_USER_MESSAGE";

export const LIKE_CURRENT_MESSAGE = "LIKE_CURRENT_MESSAGE";
export const UNLIKE_CURRENT_MESSAGE = "UNLIKE_CURRENT_MESSAGE";

export const getUsers = () => async (dispatch, getState) => {
  try {
    const payload = await api.getUsers();

    dispatch({ type: USERS, payload });
    console.log({ payload });
    return payload;
  } catch (err) {
    console.log(err);
  }
};

export const getUser = (username) => async (dispatch, getState) => {
  try {
    const payload = await api.getUser(username);

    dispatch({ type: USER, payload });
  } catch (err) {
    console.log(err);
  }
};

export const addPhoto = (username, photo) => async (dispatch) => {
  try {
    const payload = await api.addPhoto(username, photo);

    console.log({ payload });
  } catch (err) {
    console.log(err, "yes, it's an error");
  }
};

export const addMessage = (payload) => (dispatch, getState) => {
  try {
    dispatch({ type: ADD_MESSAGE, payload });
  } catch (err) {
    console.log(err, "sorry, you have an error bud.");
  }
};

export const addCurrentMessage = (payload) => (dispatch) => {
  try {
    dispatch({ type: ADD_CURRENT_MESSAGE, payload });
  } catch (err) {
    console.log("nice error broski");
  }
};

export const deleteMessage = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_MESSAGE, id });

    console.log("Message successfully deleted.");
  } catch (err) {
    console.log(err, "Do you have authorization to delete this message, fam?");
  }
};

export const deleteCurrentMessage = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_CURRENT_MESSAGE, id });

    console.log("Message successfully deleted.");
  } catch (err) {
    console.log(err, "Do you have authorization to delete this message, fam?");
  }
};

export const userMessages = (username) => async (dispatch, getState) => {
  try {
    const payload = await api.userMessages(username);
    dispatch({ type: USER_MESSAGES, payload });

    console.log({ payload });
  } catch (err) {
    console.log(err, "damn, dog. u got an error");
  }
};

export const getMessages = (limit = 100) => async (dispatch) => {
  try {
    const payload = await api.allMessages(limit);
    dispatch({ type: GET_MESSAGES, payload });
    console.log({ payload });
  } catch (err) {
    console.log(err, "please work please");
  }
};

export const likeUserMessage = (array) => (dispatch) => {
  try {
    console.log("test");
    dispatch({ type: LIKE_USER_MESSAGE, array });
  } catch (err) {
    console.log(err, "test");
  }
};

export const unlikeUserMessage = (payload) => (dispatch) => {
  try {
    console.log("plz?");
    dispatch({ type: UNLIKE_USER_MESSAGE, payload });
  } catch (err) {
    console.log(err, "plz.");
  }
};


export const likeCurrentMessage = (array) => (dispatch) => {
  try {
    console.log("test");
    dispatch({ type: LIKE_CURRENT_MESSAGE, array });
  } catch (err) {
    console.log(err, "test");
  }
};

export const unlikeCurrentMessage = (payload) => (dispatch) => {
  try {
    console.log("plz?");
    dispatch({ type: UNLIKE_CURRENT_MESSAGE, payload });
  } catch (err) {
    console.log(err, "plz.");
  }
};