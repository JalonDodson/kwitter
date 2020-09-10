import { connect } from "react-redux";
import {
  addMessage,
  addCurrentMessage,
  deleteMessage,
  deleteCurrentMessage,
  getMessages,
  getUser,
  likeCurrentMessage,
  unlikeCurrentMessage,
} from "../redux/actions/users";

const mapStateToProps = (state) => ({
  username: state.auth.username,
  user: state.users.user.user,
  users: state.messages.user,
  all: state.messages.all,
});

const mapDispatchToProps = {
  addMessage,
  getUser,
  deleteMessage,
  getMessages,
  addCurrentMessage,
  deleteCurrentMessage,
  likeCurrentMessage,
  unlikeCurrentMessage,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
