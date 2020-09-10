import {
  ADD_MESSAGE,
  ADD_CURRENT_MESSAGE,
  GET_MESSAGES,
  USER_MESSAGES,
  DELETE_MESSAGE,
  DELETE_CURRENT_MESSAGE,
  LIKE_USER_MESSAGE,
  UNLIKE_USER_MESSAGE,
  LIKE_CURRENT_MESSAGE,
  UNLIKE_CURRENT_MESSAGE,
} from "../actions";

const INITIAL_STATE = {
  user: [
    {
      messages: [],
    },
  ],
  all: [],
};

export const messagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...INITIAL_STATE,
        user: {
          ...state.user,
          messages: [action.payload, ...state.user.messages],
        },
      };
    case ADD_CURRENT_MESSAGE:
      return {
        ...INITIAL_STATE,
        all: {
          ...state.all,
          messages: [action.payload, ...state.all.messages],
        },
      };
    case GET_MESSAGES:
      return {
        ...INITIAL_STATE,
        all: action.payload,
      };
    case USER_MESSAGES:
      return {
        ...INITIAL_STATE,
        user: action.payload,
      };
    case DELETE_MESSAGE:
      return {
        ...INITIAL_STATE,
        user: {
          messages: state.user.messages.filter((m) => m.id !== action.id),
        },
      };
    case DELETE_CURRENT_MESSAGE:
      return {
        ...INITIAL_STATE,
        all: {
          messages: state.all.messages.filter((m) => m.id !== action.id),
        },
      };
    case LIKE_USER_MESSAGE:
      return {
        ...INITIAL_STATE,
        user: {
          messages: state.user.messages.map((m) => {
            if (m.id === action.array[0]) {
              return {
                ...m,
                likes: [...m.likes, action.array[1]],
              };
            }
            return m;
          }),
        },
      };
    case UNLIKE_USER_MESSAGE:
      return {
        ...INITIAL_STATE,
        user: {
          messages: state.user.messages.map((m) => {
            if (m.id === action.payload[0]) {
              return {
                ...m,
                likes: m.likes.filter((l) => l.id !== action.payload[1]),
              };
            }
            return m;
          }),
        },
      };
      case LIKE_CURRENT_MESSAGE:
      return {
        ...INITIAL_STATE,
        all: {
          messages: state.all.messages.map((m) => {
            if (m.id === action.array[0]) {
              return {
                ...m,
                likes: [...m.likes, action.array[1]],
              };
            }
            return m;
          }),
        },
      };
    case UNLIKE_CURRENT_MESSAGE:
      return {
        ...INITIAL_STATE,
        all: {
          messages: state.all.messages.map((m) => {
            if (m.id === action.payload[0]) {
              return {
                ...m,
                likes: m.likes.filter((l) => l.id !== action.payload[1]),
              };
            }
            return m;
          }),
        },
      };
    default:
      return state;
  }
};
