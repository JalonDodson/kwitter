import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";
import { addMessage, userMessages, deleteMessage, getMessages, user } from "../redux/actions/users";

const mapStateToProps = (state) => ({
  username: state.auth.username,
  user: state.users.user.user,
  users: state.messages.user,
});

const mapDispatchToProps = {
  addMessage,
  userMessages,
  deleteMessage,
  getMessages,
  logout,
  user
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
