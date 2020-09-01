import React, { createRef, useState, useEffect } from "react";

import { MenuContainer } from "../components";
import { CardContainer } from "../components/Card";
// import NewsFeed from '../components/NewsFeed'

import Image from "../utils/like-icon.png";

import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import "./Profile.css";
const font = "'Amatic SC', Arial";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      marginTop: "3%",
      width: "100%",
      backgroundColor: "#3f51b5e1",
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20%",
      textColor: "white",
      backgroundColor: "rgba(255, 255, 255, 0.350)",
      borderRadius: "5.25px",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      marginLeft: "44%",
    },
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    fontSize: "200px",
    backgroundColor: "#ffffffb9",
    color: "#3f51b5e1",
    float: "right",
    marginRight: "10%",
    marginTop: "-2.5%",
  },
  largeAvi: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    fontSize: "200px",
    backgroundColor: "rgba(255, 255, 255, 0)",
    border: "2px solid black",
    float: "right",
    marginRight: "10%",
    marginTop: "-2.5%",
  },
  multilineColor: {
    color: "lightskyblue",
    fontFamily: font,
    fontSize: "25px",
  },
  btn: {
      margin: theme.spacing(1),
      width: "20%",
      textColor: "white",
      backgroundColor: "rgba(255, 255, 255, 0.550)",
      borderRadius: "5.25px",
      boxShadow:
        "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      marginLeft: "44%",
  },
  mind: {
    marginTop: "50%",
  },
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
  }
}));

const fileInput = createRef();

export const ProfileScreen = ({ username, user, addPhoto, addMessage, userMessages, userMsgs }) => {
  const handleUpload = (ev) => {
    ev.preventDefault();
    console.log(`Picture selected: ${fileInput.current.files[0].name}`);
    addPhoto(username, fileInput.current.files[0]);
  };

  const [msg, setMsg] = useState("");

  const pictureURL = (username) =>
    `https://kwitter-api.herokuapp.com/users/${username}/picture`;

  // const [value, setValue] = useState('Controlled');
  const handleMsg = (ev) => {
    setMsg(ev.target.value);
  };

  useEffect(() => {
    userMessages(username);
    console.log(userMsgs.messages);
  }, [])

  const submitMsg = (ev) => {
    ev.preventDefault();
    addMessage(msg);
  };
  const classes = useStyles();
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
                rows={4}
                placeholder="Here's what I'm thinking..."
                variant="filled"
                className={classes.mind}
                InputProps={{
                  className: classes.multilineColor,
                }}
                onChange={handleMsg}
              />
              <Button type="submit" className={classes.btn}>Post Message</Button>
            </form>
            <Divider />
            <Typography variant="h3" id="friends">
              What you've talked about...
            </Typography>
            {userMsgs.messages.map((x) => 
            
            <CardContainer message={x.text}/>)}
          </div>
        </Paper>
      </div>
    </>
  );
};
