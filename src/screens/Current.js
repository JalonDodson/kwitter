import React, { useEffect, useState } from "react";
import api from "../utils/api";
import { nanoid } from "nanoid";

import { MenuContainer } from "../components";
import { CardContainer } from "../components/Card";

import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import "./Current.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import { currentStyles } from "../hooks/currentStyles";

export const CurrentScreen = ({
  deleteCurrentMessage,
  username,
  all,
  getMessages,
  addCurrentMessage,
  likeCurrentMessage,
  unlikeCurrentMessage,
}) => {
  const classes = currentStyles();
  const [msg, setMsg] = useState("");
  const [currentNum, setCurrentNum] = useState(100);

  useEffect(() => {
    getMessages(currentNum);
    // eslint-disable-next-line
  }, [currentNum]);

  const enterMsg = async (ev) => {
    if (ev.key === "Enter") {
      ev.preventDefault();

      const msg = ev.target.value;
      ev.target.value = "";

      await api.createMessage(msg);

      const payload = await api.userMessages(username);
      addCurrentMessage(payload.messages[0]);
    }
  };

  const submitMsg = async (ev) => {
    ev.preventDefault();

    await api.createMessage(msg);

    const payload = await api.userMessages(username);
    addCurrentMessage(payload.messages[0]);
  };

  const handleMsg = (ev) => {
    setMsg(ev.target.value);

    ev.target.value = "";
  };

  const handleDelete = async (msg) => {
    if (msg.username === username) {
      if (window.confirm("Are you sure you want to delete this message?")) {
        await api.deleteMessage(msg.id);

        deleteCurrentMessage(msg.id);
      } else {
        console.log("The message was not deleted, nothing happened.");
      }
    } else {
      console.log("User does not have permission to delete -- aborting.");
    }
  };

  const handleLike = async (id) => {
    await api.likeMessage(id);

    const likedMessage = await api.getMessage(id);
    const array = likedMessage.message.likes.filter(
      (x) => x.username === username
    );
    likeCurrentMessage([likedMessage.message.id, array[0]]);
  };

  const handleUnlike = async (messageId, likeId) => {
    for (let i = 0; i < likeId.length; i++) {
      if (likeId[i].username === username) {
        api.unlikeMessage(likeId[i].id);

        const payload = [messageId, likeId[i].id];
        unlikeCurrentMessage(payload);
      }
    }
  };

  const isLiked = (likes) => {
    let liked = false;
    for (let i = 0; i < likes.length; i++) {
      if (likes[i].username === username) {
        liked = true;
      }
    }
    return liked;
  };

  return (
    <>
      <MenuContainer />
      <div className={classes.root}>
        <Paper elevation={3} square={false}>
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
          <Divider />
          <Typography variant="h3" id="friends">
            What your friends are talking about...
          </Typography>
          {/* <MusicPlayer /> */}
          <div>
            {all.messages &&
              all.messages.map((x) => {
                const truthy = isLiked(x.likes);
                let photoURL = `https://kwitter-api.herokuapp.com/users/${x.username}/picture`;
                return (
                  <React.Fragment key={nanoid()}>
                    <CardContainer
                      del={() => handleDelete(x)}
                      like={() => handleLike(x.id)}
                      unlike={() => handleUnlike(x.id, x.likes)}
                      id={x.id}
                      key={nanoid()}
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
          <Button
            className={classes.btn}
            onClick={() => setCurrentNum((c) => (c += 100))}
          >
            Show More...
          </Button>
        </Paper>
      </div>
    </>
  );
};
