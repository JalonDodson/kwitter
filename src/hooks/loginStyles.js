import { makeStyles } from "@material-ui/core/styles";
export const loginStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  google: {
    marginTop: ".5vh",
    marginLeft: "2vw",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    marginTop: "25vh",
    marginLeft: "42.15vw",
    maxWidth: "16.55vw",
    borderRadius: "10px",
  },
  buttons: {
    width: "16.65vw",
    marginLeft: "42.15vw",
    borderRadius: "10px",
  },
  loading: {
    marginLeft: "25vw",
    marginTop: "5vh",
  },
  loginFail: {
    color: "red",
    fontSize: "16px",
    textAlign: "center",
  },
  login: {
    width: "8vw",
  },
  logo: {
    marginLeft: "45.5vw",
    marginBottom: "-20vh",
    height: "15vh",
    width: "10vw",
  },
  register: {
    width: "8vw",
    float: "right",
  },
  registration: {
    width: "16.6vw",
  },
  success: {
    fontSize: "16px",
    color: "#3f51b5",
    textAlign: "center",
  },
}));