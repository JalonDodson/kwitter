import React, { useEffect, useState } from 'react';
import api from "../utils/api";
import { nanoid } from "nanoid";
// import { NewsFeed } from '../components';
import { MenuContainer } from "../components";
import { CardContainer } from "../components/Card";

import Button from "@material-ui/core/Button"
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import "./Current.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import { currentStyles } from "../hooks/currentStyles";

import Stream from '../components/Stream/Stream';

// import { MusicPlayer } from '../Player';

export const CurrentScreen = ({ addMessage,
    deleteMessage,
    username,
    user,
    users,
    all,
    getMessages, }) => {
    const classes = currentStyles();
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        getMessages();
        // eslint-disable-next-line
    }, [count])
    // hey vince chip sucks
    const enterMsg = (ev) => {
        if (ev.key === "Enter") {
            addMessage(ev.target.value);

            setCount((c) => c + 1);
            ev.target.value = "";
            ev.target.blur();
        }
    };

    // const hasPhoto = async (username) => {
    //     let userPhoto = "";
    //     const usr = await api.user(username); 
    //     if (usr.user.pictureLocation) {
    //         userPhoto = usr.user.username;
    //     } else {
    //         return "banana";
    //     }
    //     return userPhoto;
    // }

    const submitMsg = (ev) => {
        ev.preventDefault();

        addMessage(msg);
        setCount((c) => c + 1);
    };

    const handleMsg = (ev) => {
        setMsg(ev.target.value);

        ev.target.value = "";
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this message?")) {
            deleteMessage(id);

            setCount((c) => c + 1);
        } else {
            console.log("The message was not deleted, nothing happened.");
        }
    };

    const handleLike = (id) => {
        api.likeMessage(id);
        setCount((c) => c + 1);
    }

    const handleUnlike = (id) => {
        for (let i = 0; i < id.length; i++) {
            if (id[i].username === username) {
                api.unlikeMessage(id[i].id)
            }
        }
        setCount((c) => c + 1);
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
            {all.messages && all.messages.map((x) => {
                const truthy = isLiked(x.likes)
                // const photo = hasPhoto(x.username);
                return (
                    <>
                        <CardContainer
                            del={() => handleDelete(x.id)}
                            like={() => handleLike(x.id)}
                            unlike={() => handleUnlike(x.likes)}
                            id={x.id}
                            key={nanoid()}
                            displayName={x.username}
                            message={x.text}
                            likesCount={x.likes.length}
                            liked={truthy}
                        />
                        <Divider className={classes.divider} />
                    </>
                );
            })}
            </Paper>
            </div>
        </>
        
    )
    
};