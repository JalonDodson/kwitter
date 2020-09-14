import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { usersReducer } from "./users";
import { messagesReducer } from "./messages";

export default combineReducers({ 
    auth: authReducer,
    users: usersReducer,
    messages: messagesReducer,
});
