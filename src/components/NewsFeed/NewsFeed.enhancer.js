import { connect } from 'react-redux';
import { addPhoto, addMessage, userMessages, deleteMessage } from "../redux/actions/users";

const mapStateToProps = (state) => ({
  username: state.auth.username,
  user: state.users.user.user,
  users: state.messages.user,
});

const mapDispatchToProps = {
  addPhoto,
  addMessage,
  userMessages,
  deleteMessage,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);