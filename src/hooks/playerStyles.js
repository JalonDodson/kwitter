import { makeStyles } from "@material-ui/core/styles";

export const playerStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    "& > *": {
      margin: theme.spacing(1),
      marginTop: "1vh",
      width: "100vw",
      borderRadius: "5.25px",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      backgroundColor: "#3f51b5e1",
    },
  },
  main: {
    display: "flex",
    marginLeft: "40vw",
    backgroundColor: "rgba(000,000,000, 0.0)"
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
    height: "250px",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    marginLeft: "1vw",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));
