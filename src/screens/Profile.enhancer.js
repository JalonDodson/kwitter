import { connect } from "react-redux";
import { addMessage, userMessages, deleteMessage, getMessages } from "../redux/actions/users";

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
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
