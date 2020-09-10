import { connect } from "react-redux";
import { logout } from "../../redux/actions/auth";

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.isAuthenticated,
  username: state.auth.username,
  user: state.users.user.user,
  photoUpdated: state.users.user.photoUpdated,
});

const mapDispatchToProps = {
  logout,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
