import { makeStyles } from "@material-ui/core/styles";

const font = "'Amatic SC', Arial";

export const currentStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      marginTop: "1vh",
      width: "100vw", 
      borderRadius: "5.25px",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      backgroundColor: "#3f51b5e1",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20%",
      textColor: "white",
      backgroundColor: "rgba(255, 255, 255, 0.350)",
      borderRadius: "5.25px",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      marginLeft: "39.5vw",
    },
  },
  multilineColor: {
    color: "lightskyblue",
    fontFamily: font,
    fontSize: "25px",
  },
  btn: {
    margin: theme.spacing(1),
    width: "19.7vw",
    textColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0.550)",
    borderRadius: "5.25px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft: "39.5vw",
  },
  divider: {
    opacity: 0,
    paddingTop: "1.5vh",
    paddingBottom: "1.5vh",
    marginLeft: "36vw",
  },
  friends: {
    fontFamily: font,
    color: "rgba(255, 255, 255, 0.521)",
    textAlign: "center",
  }
}));
