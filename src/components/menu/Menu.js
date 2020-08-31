import React from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Menu.css";

// material-ui
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import "fontsource-roboto";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "right",
  },
  main: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

const textStyle = makeStyles((theme) => ({
  root: {},
}));

export const Menu = ({ isAuthenticated, logout }) => {
  const classes = useStyles();
  const text = textStyle();
  return (
    <div id="menu">
      <div className={classes.root}>
        <Typography variant="h6" id="Kwittext" className={classes.main}>
          Kwitter
        </Typography>
        <Typography
          variant="overline"
          display="block"
          id="simplicity"
          className={text.root}
        >
          Beautiful. Simplistic. Revolutionary. Kwitter.
        </Typography>
        {isAuthenticated && (
          <>
            <AppBar position="static" color="inherit" id="bar">
              <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                >
                  <MenuIcon />
                </IconButton>
                <Link to="/messagefeed" id="link">
                  <Typography variant="h6" className={classes.title}>
                    Feed
                  </Typography>
                </Link>
                <Button
                  id="logout-btn"
                  color="inherit"
                  href="/"
                  onClick={logout}
                >
                  <h3>Log Out</h3>
                </Button>
              </Toolbar>
            </AppBar>
          </>
        )}
      </div>
    </div>
  );
};

Menu.defaultProps = {
  isAuthenticated: false,
  logout: () => {},
};

Menu.propTypes = {
  isAuthenticated: ProptTypes.bool.isRequired,
  logout: ProptTypes.func.isRequired,
};
