import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  username: state.auth.username,
  user: state.users.user.user,
});

export const enhancer = connect(mapStateToProps); 
