import React, { useState, useEffect, createRef } from "react";
import api from "../utils/api";

import { MenuContainer } from "../components";
import { CardContainer } from "../components/Card";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import { profileStyles } from "../hooks/profileStyles";
import SettingsIcon from "@material-ui/icons/Settings";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import "./Profile.css";

import { nanoid } from "nanoid";

const fileInput = createRef();

export const ProfileScreen = ({
  addMessage,
  deleteMessage,
  userMessages,
  users,
  username,
  user,
  getMessages,
}) => {
  const [cnt, setCnt] = useState(0);
  const [msg, setMsg] = useState("");
  const [uploader, setUploader] = useState(false);
  const getPhoto = (username) =>
    `https://kwitter-api.herokuapp.com/users/${username}/picture`;

  const uploadPhoto = () => {
    const formData = new FormData();

    const data = fileInput.current.files[0];

    formData.append("picture", data);

    api.addPhoto(username, formData);
    
    setUploader(false);
  };

  const handleMsg = (ev) => {
    setMsg(ev.target.value);

    ev.target.value = "";
  };

  useEffect(() => {
    getMessages();
    userMessages(username);
    // eslint-disable-next-line
  }, [cnt]);

  const submitMsg = (ev) => {
    ev.preventDefault();

    addMessage(msg);
    setCnt((c) => c + 1);
  };
  const classes = profileStyles();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      deleteMessage(id);

      setCnt((c) => c + 1);
    } else {
      console.log("The message was not deleted, nothing happened.");
    }
  };

  const handleLike = (id) => {
    api.likeMessage(id);
    setCnt((c) => c + 1);
  }

  const handleUnlike = (id) => {
    for (let i = 0; i < id.length; i++) {
      if (id[i].username === username) {
        api.unlikeMessage(id[i].id)
      }
    }
    setCnt((c) => c + 1);
  }

  const isLiked = (likes) => {
    let nerdy = false;
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].username === username) {
        nerdy = true;
      }
    }
    return nerdy;
  }

  const handleSettings = (ev) => {
    alert("This feature is not yet implemented!");
  };

  const enterMsg = (ev) => {
    if (ev.key === "Enter") {
      addMessage(ev.target.value);

      setCnt((c) => c + 1);
      ev.target.value = "";
      ev.target.blur();
    }
  };

  return (
    <>
      <MenuContainer />
      <div className={classes.root}>
        <Paper elevation={3} square={false}>
          <IconButton className={classes.settings} onClick={handleSettings}>
            <SettingsIcon fontSize="large" />
          </IconButton>
          <div>
            <Typography variant="h1" id="welcome">
              Welcome to Kwitter, {user.displayName}!
            </Typography>
            {user.pictureLocation !== null ? (
              <Avatar
                className={classes.largeAvi}
                alt={user.displayName}
                src={getPhoto(username)}
               ></Avatar>
            ) : (
              <Avatar className={classes.large}>
                {user.displayName[0].toUpperCase()}
              </Avatar>
            )}

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
              {!uploader ? (
                <Button
                  className={classes.photoBtn}
                  type="button"
                  variant="contained"
                  onClick={() => setUploader(true)}
                >
                  Change Photo
                </Button>
              ) : (
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
              )}
            </form>
            <br />
            <Divider />
            <Typography variant="h3" id="friends">
              What you've talked about...
            </Typography>
            {users.messages &&
              users.messages.map((x) => {
                const truthy = isLiked(x.likes)
                return (
                  <>
                    <CardContainer
                      del={() => handleDelete(x.id)}
                      like={() => handleLike(x.id)}
                      unlike={() => handleUnlike(x.likes)}
                      id={x.id}
                      key={nanoid()}
                      message={x.text}
                      likesCount={x.likes.length}
                      liked={truthy}
                      />
                    <Divider className={classes.divider} />
                  </>
                );
              })}
          </div>
        </Paper>
      </div>
    </>
  );
};
