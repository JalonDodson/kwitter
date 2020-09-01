import { connect } from "react-redux";
import { addPhoto } from "../redux/actions/users"

const mapStateToProps = (state) => ({
  username: state.auth.username,
  user: state.users.user.user,
});

const mapDispatchToProps = {
  addPhoto
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps); 
