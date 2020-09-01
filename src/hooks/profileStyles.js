import { makeStyles } from "@material-ui/core/styles";

const font = "'Amatic SC', Arial";

export const profileStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      marginTop: "3%",
      width: "100%",
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
      marginLeft: "44%",
    },
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    fontSize: "200px",
    backgroundColor: "#ffffffb9",
    color: "#3f51b5e1",
    float: "right",
    marginRight: "10%",
    marginTop: "-2.5%",
  },
  largeAvi: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    fontSize: "200px",
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "2px solid black",
    float: "right",
    marginRight: "10%",
    marginTop: "-2.5%",
  },
  multilineColor: {
    color: "lightskyblue",
    fontFamily: font,
    fontSize: "25px",
  },
  btn: {
    margin: theme.spacing(1),
    width: "20%",
    textColor: "white",
    backgroundColor: "rgba(255, 255, 255, 0.550)",
    borderRadius: "5.25px",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    marginLeft: "44%",
  },
  mind: {
    marginTop: "50%",
  },
  cards: {
    maxWidth: 350,
    float: "center",
    marginLeft: "40.5%",
  },
  like: {
    height: "30px",
    width: "30px",
  },
  delete: {
    color: "red",
  },
}));
