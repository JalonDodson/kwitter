// TODO: implement
import { USERS, USER } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  user: {},
  users: [{}],
};

export const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USERS:
      return {
        ...INITIAL_STATE,
        users: action.payload,
      };
    case USER:
      return {
        ...INITIAL_STATE,
        user: action.payload,
      };
    default:
      return state;
  }
};
