import React from "react";
import ProptTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Menu.css";

// material-ui
import Menu from "@material-ui/core/Menu";
import "fontsource-roboto";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: "25px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export const MenuBar = ({ isAuthenticated, logout, user }) => {
  // material-ui stuff
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  // api stuff

  const pictureURL = (username) =>
    `https://kwitter-api.herokuapp.com/users/${username}/picture`;

  const menuId = "primary-search-account-menu";

  return !isAuthenticated ? (
      <>
        <Typography variant="h6" id="Kwittext" className={classes.main}>
          Kwitter
        </Typography>
        <Typography variant="overline" display="block" id="simplicity">
          Beautiful. Simplistic. Revolutionary. Kwitter.
        </Typography>
      </>
    ) : (
      <>
        <AppBar position="static" id="main-bar">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Kwitter
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search Kwitter…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {user.pictureLocation !== null ? (
                  <Avatar
                    alt={user.displayName}
                    src={pictureURL(user.username)}
                  ></Avatar>
                ) : (
                  <Avatar>{user.displayName[0].toUpperCase()}</Avatar>
                )}
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          id={menuId}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={isMenuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem>
            <Link to="/">Profile</Link>
          </MenuItem>
          <MenuItem onClick={logout}>Log Out</MenuItem>
        </Menu>
      </>
    );
  }

Menu.defaultProps = {
  isAuthenticated: false,
  logout: () => {},
};

Menu.propTypes = {
  isAuthenticated: ProptTypes.bool.isRequired,
  logout: ProptTypes.func.isRequired,
};
