import { makeStyles } from "@material-ui/core/styles";

export const userCardStyles = makeStyles((theme) => ({
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
