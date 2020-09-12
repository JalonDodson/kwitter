import { makeStyles } from "@material-ui/core/styles";

export const uploadStyles = makeStyles((theme) => ({
    photoContainer: {
        marginLeft: "79%",
        marginTop: "-10%",
      },
      photoBtn: {
        margin: theme.spacing(1),
        width: "50%",
        textColor: "white",
        backgroundColor: "rgba(255, 255, 255, 0.550)",
        borderRadius: "5.25px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      },
}));