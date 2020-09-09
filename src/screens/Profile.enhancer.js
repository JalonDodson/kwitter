import { connect } from "react-redux";
import { logout } from "../redux/actions/auth";
import { addMessage, userMessages, deleteMessage, getMessages, getUser } from "../redux/actions/users";

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
  getUser
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
