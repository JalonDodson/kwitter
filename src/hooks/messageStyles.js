import { makeStyles } from "@material-ui/core/styles";

const font = "'Amatic SC', Arial";

export const messageStyles = makeStyles((theme) => ({
  root: {
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
  multilineColor: {
    color: "lightskyblue",
    fontFamily: font,
    fontSize: "25px",
  },
}));
