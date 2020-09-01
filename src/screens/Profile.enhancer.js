import { connect } from "react-redux";
import { addPhoto, addMessage, userMessages } from "../redux/actions/users";

const mapStateToProps = (state) => ({
  username: state.auth.username,
  user: state.users.user.user,
  messages: state.messages.messages,
  userMsgs: state.messages.userMsgs,
});

const mapDispatchToProps = {
  addPhoto,
  addMessage,
  userMessages,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps); 