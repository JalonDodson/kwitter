import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

// material-ui
import Menu from "@material-ui/core/Menu";
import "fontsource-roboto";
import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuItem from "@material-ui/core/MenuItem";
import SearchIcon from "@material-ui/icons/Search";

import { menuStyles } from "../../hooks/menuStyles";

export const MenuBar = ({ isAuthenticated, logout, user, username }) => {
  // material-ui stuff
  const [searchTerm, setSearchState] = useState("");
  const classes = menuStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  // api stuff
  const handleChange = (ev) => {
    setSearchState(ev.target.value);
  };

  const logMeOut = () => {
    logout();
  };

  const handleSearch = (ev) => {
    if (ev.key === "Enter") {
      console.log(searchTerm);
      console.log(true);
      ev.target.value = "";
    }
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
          <Typography className={classes.title} variant="h6" noWrap>
            Kwitter
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search Kwitter Users..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={handleChange}
              onKeyDown={handleSearch}
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
        <MenuItem>
          <Link to="/">Profile</Link>
        </MenuItem>
        {/* no, just refresh the page and then seelect the current from the account icon thing. wait*/}
        <MenuItem>
          <Link to="/thecurrent">The Current</Link>
        </MenuItem>
        <MenuItem onClick={logMeOut}>Log Out</MenuItem>
      </Menu>
    </>
  );
};
