import { makeStyles } from "@material-ui/core/styles";
export const loginStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  google: {
    marginTop: ".5em",
    marginLeft: "2.5em",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    marginTop: "17.5em",
    marginLeft: "50.5em",
    maxWidth: "20em",
    borderRadius: "10px",
  },
  buttons: {
    width: "20em",
    marginLeft: "50.5em",
    borderRadius: "10px",
  },
  loading: {
    marginLeft: "35em",
    marginTop: "7.5em",
  },
  loginFail: {
    color: "red",
    fontSize: "16px",
    textAlign: "center",
  },
  login: {
    width: "11em",
  },
  logo: {
    marginLeft: "54em",
    marginBottom: "-15em",
    height: "12.5em",
    width: "12.5em",
  },
  register: {
    width: "11em",
    float: "right",
  },
  registration: {
    width: "23em",
  },
  success: {
    fontSize: "16px",
    color: "#3f51b5",
    textAlign: "center",
  },
}));