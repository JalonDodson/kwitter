import { connect } from "react-redux";
import { login, register } from "../../redux/actions/auth";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  login,
  register,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
