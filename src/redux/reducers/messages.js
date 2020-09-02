// TODO: implement
// import API return for messages

// const [INITIAL_STATE, setInitState] = useState()
// setInitState(/*API retrun*/)
// {
//   messages: [{}],
// };

// TODO: implement
import { ADD_MESSAGE, GET_MESSAGES, USER_MESSAGES, DELETE_MESSAGE } from "../actions";

// INITIAL STATE
const INITIAL_STATE = {
  user: [],
  all: [],
};

export const messagesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...INITIAL_STATE,
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
      }
    default:
      return state;
  }
};
