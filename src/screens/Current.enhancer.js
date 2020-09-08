import { connect } from "react-redux";
import { addMessage, deleteMessage, getMessages } from "../redux/actions/users";

const mapStateToProps = (state) => ({
  username: state.auth.username,
  user: state.users.user.user,
  users: state.messages.user,
  all: state.messages.all,
});

const mapDispatchToProps = {
  addMessage,
  deleteMessage,
  getMessages,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
