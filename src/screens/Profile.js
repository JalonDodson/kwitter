import React, { createRef, useState } from "react";

import { MenuContainer } from "../components";
// import NewsFeed from '../components/NewsFeed'

import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Divider from "@material-ui/core/Divider";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from "@material-ui/core/IconButton";
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
  mind: {
    marginTop: "50%",
  },
  cards: {
    maxWidth: 350,
    float: "center",
    marginLeft: "40.5%",
  },
}));

const fileInput = createRef();

export const ProfileScreen = ({ username, user, addPhoto }) => {
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
    console.log(msg);
  };

  const submitMsg = (ev) => {
    console.log("k");
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
            {console.log(user)}
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
            </form>
            <Divider />
            <Typography variant="h3" id="friends">
              What are your friends talking about?
            </Typography>
            <Card className={classes.cards}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Jane's Avatar"
                  height="140"
                  image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                  title="Jane's Avatar"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Jane says..
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    I don't like the way people don't have faces. Like, if you're going to be a human, have a face!
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <IconButton size="small" color="primary">
                  Message
                </IconButton>
                <Button size="small" color="primary">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </div>
        </Paper>
      </div>
    </>
  );
};
