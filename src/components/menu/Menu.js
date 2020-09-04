import React from "react";
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

export const MenuBar = ({ isAuthenticated, logout, user }) => {
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
        {/* <MenuItem onClick={deleteConfirm}>Delete Profile</MenuItem> */}
        <MenuItem>
        <Link to='/thecurrent'>The Current</Link>
        </MenuItem>
        <MenuItem onClick={logout}>Log Out</MenuItem>
      </Menu>
    </>
  );
};
