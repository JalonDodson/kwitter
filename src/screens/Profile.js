import React, { useState, useEffect, createRef } from "react";

import api from "../utils/api";
import { nanoid } from "nanoid";

import { MenuContainer } from "../components";
import { CardContainer } from "../components/Card";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import { profileStyles } from "../hooks/profileStyles";
import SettingsIcon from "@material-ui/icons/Settings";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import "./Profile.css";

const fileInput = createRef();

export const ProfileScreen = ({
  addMessage,
  deleteMessage,
  userMessages,
  users,
  username,
  user,
  logout,
  getUser,
  likeUserMessage,
  unlikeUserMessage,
}) => {
  // material-ui handlers
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [msg, setMsg] = useState("");

  // photos
  useEffect(() => {
    updatePhoto();
    // eslint-disable-next-line
  }, [user]);

  const getPhoto = (username) => {
    return `https://kwitter-api.herokuapp.com/users/${username}/picture?t=${user.pictureLocation
      .split("?t=")
      .pop()}`;
  };

  const updatePhoto = () => {
    return getPhoto(username);
  };

  const uploadPhoto = async () => {
    const formData = new FormData();

    const data = fileInput.current.files[0];

    formData.append("picture", data);

    const payload = await api.addPhoto(username, formData);
    if (payload) {
      getUser(username);
    }
    // setUploader(false);
  };

  const userPic = () => {
    return (
      <Avatar
        className={classes.largeAvi}
        alt={user.displayName}
        src={updatePhoto()}
      ></Avatar>
    );
  };

  const defaultPic = () => {
    return (
      <Avatar className={classes.large}>
        {user.displayName[0].toUpperCase()}
      </Avatar>
    );
  };

  const handleMsg = (ev) => {
    setMsg(ev.target.value);

    ev.target.value = "";
  };

  useEffect(() => {
    userMessages(username);
    // eslint-disable-next-line
  }, []);

  const submitMsg = async (ev) => {
    ev.preventDefault();

    await api.createMessage(msg);

    const payload = await api.userMessages(username);
    addMessage(payload.messages[0]);
  };
  const classes = profileStyles();

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      await api.deleteMessage(id);

      deleteMessage(id);
    } else {
      console.log("The message was not deleted, nothing happened.");
    }
  };

  const handleLike = async (id) => {
    await api.likeMessage(id);

    const likedMessage = await api.getMessage(id);
    const array = likedMessage.message.likes.filter(
      (x) => x.username === username
    );
    likeUserMessage([likedMessage.message.id, array[0]]);
  };

  const handleUnlike = async (messageId, likeId) => {
    for (let i = 0; i < likeId.length; i++) {
      if (likeId[i].username === username) {
        api.unlikeMessage(likeId[i].id);

        const payload = [messageId, likeId[i].id];
        unlikeUserMessage(payload);
      }
    }

    // const likedMessage = await api.getMessage(id);
    // const array = likedMessage.message.likes.filter((x) => x.username === username);
  };

  const isLiked = (likes) => {
    let nerdy = false;
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].username === username) {
        nerdy = true;
      }
    }
    return nerdy;
  };

  const enterMsg = async (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();

      const msg = ev.target.value;
      ev.target.value = "";

      await api.createMessage(msg);

      const payload = await api.userMessages(username);
      addMessage(payload.messages[0]);
    }
  };

  // account change handlers
  const [accOpener, setAccOpener] = useState(false);
  const [abt, setAbt] = useState("");
  const [name, setName] = useState("");

  const greeting = () => {
    return (
      <Typography variant="h1" id="welcome">
        Welcome to Kwitter, {user.displayName}!
      </Typography>
    );
  };

  const handleAccChange = () => {
    setAccOpener(true);
    handleMenuClose();
  };

  const closeAcc = () => {
    setAccOpener(false);
  };

  const handleNameChange = (ev) => {
    setName(ev.target.value);
  };

  const handleAbtChange = (ev) => {
    setAbt(ev.target.value);
  };

  const submitChanges = async () => {
    const about = abt === "" ? user.about : abt;
    const dName = name === "" ? user.displayName : name;
    const payload = await api.changeUserInfo(dName, about, username);
    if (payload) {
      getUser(username);
      setAccOpener(false);
      setName("");
      setAbt("");
    }
  };

  // password handlers
  const [confOpener, setConfOpener] = useState(false);
  const [pwOpener, setPwOpener] = useState(false);
  const [pw, setPw] = useState("");
  const [changed, setChanged] = useState(false);

  const closeConf = () => {
    setConfOpener(false);
  };

  const handleConfirm = () => {
    getUser(username);
    setConfOpener(false);
    setPwOpener(true);
    setPw("");
  };

  const closePw = () => setPwOpener(false);

  const handlePwChange = (ev) => {
    setPw(ev.target.value);
  };

  const changePassword = () => {
    setConfOpener(true);
    handleMenuClose();
  };

  const confirmPw = () => {
    api.changePassword(username, pw);
    setChanged(true);
    setPwOpener(false);
  };

  const closeChange = () => {
    setChanged(false);
  };

  // account deletion handlers
  const [delOpener, setDelOpener] = useState(false);
  const closeDel = () => {
    setDelOpener(false);
    handleMenuClose();
  };
  const confirmDeletion = () => {
    api.deleteUser(username);
    logout();
    setDelOpener(false);
  };

  const handleAccountDeletion = () => {
    setDelOpener(true);
    handleMenuClose();
  };
  return (
    <>
      <MenuContainer />
      <div className={classes.root}>
        <Paper elevation={3} square={false}>
          <IconButton
            className={classes.settings}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
          >
            <SettingsIcon fontSize="large" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleAccChange}>
              Change Account Information
            </MenuItem>
            <MenuItem onClick={changePassword}>Change Password</MenuItem>
            <MenuItem onClick={handleAccountDeletion}>Delete Account</MenuItem>
          </Menu>
          {accOpener && (
            <Dialog
              open={accOpener}
              onClose={closeAcc}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">
                Change Account Information
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  You are now able to change your account information. Please
                  enter your new desired information into the boxes. If you
                  leave a box empty, the related information will remain
                  unchanged.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  name="name"
                  label="Change Display Name"
                  type="text"
                  onChange={handleNameChange}
                  value={name}
                  fullWidth
                />
                <TextField
                  margin="dense"
                  name="about"
                  rows={8}
                  label="Tell us a little about yourself!"
                  type="text"
                  onChange={handleAbtChange}
                  value={abt}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={closeAcc} color="primary">
                  Cancel
                </Button>
                <Button onClick={submitChanges} color="primary">
                  Confirm Changes
                </Button>
              </DialogActions>
            </Dialog>
          )}
          {confOpener && (
            <Dialog
              open={confOpener}
              TransitionComponent={Transition}
              keepMounted
              onClose={closeConf}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"Change Password?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  Would you like to change your account password? This action is
                  irreversible and your old password may not be recovered! Press
                  abort to cancel this action, or continue to move forward.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeConf} color="primary">
                  Abort
                </Button>
                <Button onClick={handleConfirm} color="primary">
                  Continue
                </Button>
              </DialogActions>
            </Dialog>
          )}
          {pwOpener && (
            <Dialog
              open={pwOpener}
              onClose={closePw}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Change Password</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Enter your new password here, then press "Change Password" to
                  continue, or "Cancel" to abort.
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="password"
                  label="New Password"
                  type="password"
                  onChange={handlePwChange}
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={closePw} color="primary">
                  Cancel
                </Button>
                <Button onClick={confirmPw} color="primary">
                  Change Password
                </Button>
              </DialogActions>
            </Dialog>
          )}
          {changed && (
            <Dialog
              open={changed}
              TransitionComponent={Transition}
              keepMounted
              onClose={closeChange}
              aria-labelledby="alert-dialog-slide-title"
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle id="alert-dialog-slide-title">
                {"Password successfully changed!"}
              </DialogTitle>
              <DialogActions>
                <Button onClick={closeChange} color="primary">
                  Confirm
                </Button>
              </DialogActions>
            </Dialog>
          )}
          {delOpener && (
            <Dialog
              open={delOpener}
              onClose={closeDel}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">Delete Account</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Are you sure you would like to delete your account? Please
                  keep in mind that this action is irreversible and all data
                  associated with your account will be destroyed.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={closeDel} color="primary">
                  Cancel
                </Button>
                <Button onClick={confirmDeletion} color="primary">
                  Delete Account
                </Button>
              </DialogActions>
            </Dialog>
          )}
          <div>
            {greeting()}

            {user.pictureLocation !== null ? userPic() : defaultPic()}
            <form onSubmit={submitMsg}>
              <TextField
                label="What's on your mind?"
                multiline
                rows={4}
                placeholder="Here's what I'm thinking..."
                variant="filled"
                className={classes.mind}
                InputProps={{
                  className: classes.multilineColor,
                }}
                onKeyDown={enterMsg}
                onBlur={handleMsg}
              />
              <Button type="submit" className={classes.btn}>
                Post Message
              </Button>
            </form>
            <form className={classes.photoContainer}>
              <Button
                className={classes.photoBtn}
                variant="contained"
                component="label"
                startIcon={<CloudUploadIcon />}
              >
                <input
                  type="file"
                  id="file-upload"
                  ref={fileInput}
                  onChange={uploadPhoto}
                  style={{ display: "none" }}
                />
                Upload Photo
              </Button>
            </form>
            <br />
            <Divider />
            <Typography variant="h3" id="friends">
              What you've talked about...
            </Typography>
            {users.messages &&
              users.messages.map((x) => {
                const truthy = isLiked(x.likes);
                let photoURL = `https://kwitter-api.herokuapp.com/users/${x.username}/picture`;
                return (
                  <React.Fragment key={nanoid()}>
                    <CardContainer
                      del={() => handleDelete(x.id)}
                      like={() => handleLike(x.id)}
                      unlike={() => handleUnlike(x.id, x.likes)}
                      id={x.id}
                      displayName={x.username}
                      photoLoc={photoURL}
                      message={x.text}
                      likesCount={x.likes.length}
                      liked={truthy}
                    />
                    <Divider className={classes.divider} />
                  </React.Fragment>
                );
              })}
          </div>
        </Paper>
      </div>
    </>
  );
};
