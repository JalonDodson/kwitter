import React, { useState, useEffect } from "react";

import { MenuContainer } from "../components";
import { CardContainer } from "../components/Card";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { profileStyles } from "../hooks/profileStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import "./Profile.css";

import { nanoid } from "nanoid";

// const fileInput = createRef();

export const ProfileScreen = ({
  username,
  user,
  addPhoto,
  addMessage,
  userMessages,
  users,
}) => {
  // const handleUpload = (ev) => {
  //   ev.preventDefault();
  //   console.log(`Picture selected: ${fileInput.current.files[0].name}`);
  //   addPhoto(username, fileInput.current.files[0]);
  // };

  const [msg, setMsg] = useState("");
  const pictureURL = (username) =>
    `https://kwitter-api.herokuapp.com/users/${username}/picture`;

  const handleMsg = (ev) => {
    setMsg(ev.target.value);

    ev.target.value = "";
  };

  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    userMessages(username);
// eslint-disable-next-line
  }, [cnt]);

  const submitMsg = (ev) => {
    ev.preventDefault();

    addMessage(msg);
    setCnt((c) => c + 1);
  };

  const classes = profileStyles();

  return (
    <>
      <MenuContainer />
      <div className={classes.root}>
        <Paper elevation={3} square={false}>
          <div>
            <Typography variant="h1" id="welcome">
              Welcome to Kwitter, {user.displayName}!
            </Typography>
            {user.pictureLocation !== null ? (
              <Avatar
                className={classes.largeAvi}
                alt={user.displayName}
                src={pictureURL(user.username)}
              ></Avatar>
            ) : (
              <Avatar className={classes.large}>
                {user.displayName[0].toUpperCase()}
              </Avatar>
            )}
            {/* <img src={require("../utils/logo.png")} alt="Kwitter logo" /> */}
            {/* <Paper elevation={5} id="upload-paper">
              <form onSubmit={handleUpload}>
                <Button
                  className="btn"
                  type="button"
                  variant="contained"
                  color="primary"
                  component="label"
                >
                  Select Picture
                  <input
                    type="file"
                    id="file-upload"
                    ref={fileInput}
                    style={{ display: "none" }}
                  />
                </Button>
                <Button
                  className="btn"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  Upload Picture
                </Button>
              </form>
            </Paper> */}
            <form onSubmit={submitMsg}>
              <TextField
                label="What's on your mind?"
                multiline
                rows={5}
                placeholder="Here's what I'm thinking..."
                variant="filled"
                className={classes.mind}
                InputProps={{
                  className: classes.multilineColor,
                }}
                onBlur={handleMsg}
              />
              <Button type="submit" className={classes.btn}>
                Post Message
              </Button>
            </form>
            <Divider />
            <Typography variant="h3" id="friends">
              What you've talked about...
            </Typography>
            {users.messages &&
              users.messages.map((x) => {
                return <CardContainer key={nanoid()} message={x.text} />;
              })}
          </div>
        </Paper>
      </div>
    </>
  );
};
