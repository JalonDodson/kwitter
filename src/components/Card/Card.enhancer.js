import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  username: state.auth.username,
  user: state.users.user.user,
  messages: state.messages,
  uesrMessages: state.messages,
});

const mapDispatchToProps = {
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps); 
