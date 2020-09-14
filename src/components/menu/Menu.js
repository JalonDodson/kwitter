import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

// material-ui
import Menu from "@material-ui/core/Menu";
import "fontsource-roboto";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";

import { menuStyles } from "../../hooks/menuStyles";

export const MenuBar = ({ isAuthenticated, logout, user, username }) => {
  // material-ui stuff
  const classes = menuStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const logMeOut = () => {
    logout();
  };

  const menuId = "primary-search-account-menu";

  // photo stuff
  useEffect(() => {
    updatePhoto();
    // eslint-disable-next-line
  }, [user]);

  const getPhoto = (username) => {
    return user
      ? user.pictureLocation
        ? `https://kwitter-api.herokuapp.com/users/${username}/picture?t=${user.pictureLocation
            .split("?t=")
            .pop()}`
        : null
      : null;
  };

  const updatePhoto = () => {
    return getPhoto(username);
  };

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
          <Typography className={classes.title} variant="h5" noWrap>
            Kwitter
          </Typography>
          <div className={classes.grow} />
          <Link to="/">
            <Typography className={classes.prof} variant="button" noWrap>
              Profile
            </Typography>
          </Link>
          <Divider orientation="vertical" flexItem className={classes.div1} />
          <Link to="/thecurrent">
            <Typography className={classes.curr} variant="button" noWrap>
              The Current
            </Typography>
          </Link>
          <Divider orientation="vertical" flexItem className={classes.div2} />
          <Link to="/streamplayer">
            <Typography className={classes.music} variant="button" noWrap>
              Play A Song
            </Typography>
          </Link>
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              {user ? (
                user.pictureLocation ? (
                  <Avatar
                    alt={user.displayName}
                    src={updatePhoto(username)}
                  ></Avatar>
                ) : (
                  <Avatar>{user.displayName[0].toUpperCase()}</Avatar>
                )
              ) : null}
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
        <MenuItem onClick={logMeOut}>Log Out</MenuItem>
      </Menu>
    </>
  );
};
