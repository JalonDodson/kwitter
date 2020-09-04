import { connect } from 'react-redux';
import { addMessage, userMessages, deleteMessage } from "../../redux/actions/users";

const mapStateToProps = (state) => ({
  // username: state.auth.username,
  user: state.users.user.user,
  users: state.messages.user,
});

const mapDispatchToProps = {
  addMessage,
  userMessages,
  deleteMessage,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);