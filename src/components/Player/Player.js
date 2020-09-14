import React, { useEffect, useState } from "react";

import { MenuContainer } from "../";
import { playerStyles } from "../../hooks/playerStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Paper from "@material-ui/core/Paper";

import turtlemusic from "../../songs/turtlemusic.png";
import moodswings from "../../songs/moodswings.mp3";
import changes from "../../songs/changes.mp3";
import cruise from "../../songs/cruise.mp3";
import fn from "../../songs/fn.mp3";
import kumbaya from "../../songs/kumbaya.mp3";
import likeiaint from "../../songs/likeiaint.mp3";
import thirst from "../../songs/thirst.mp3";

export const Player = () => {
  const classes = playerStyles();
  const videos = [
    {
      title: "Mood Swings",
      author: "MFin Pop Smoke",
      audio: new Audio(moodswings),
    },
    {
      title: "Changes",
      author: "Tupac Shakur",
      audio: new Audio(changes),
    },
    {
      title: "Sea Cruise",
      author: "Crash Tha Turtle",
      audio: new Audio(cruise),
    },
    {
      title: "F.N.",
      author: "Lil Tjay",
      audio: new Audio(fn),
    },
    {
      title: "Kumbaya",
      author: "Marcus Hopsin",
      audio: new Audio(kumbaya),
    },
    {
      title: "Like I Ain't",
      author: "TECH N9NE",
      audio: new Audio(likeiaint),
    },
    {
      title: "Dying of Thirst",
      author: "Kendrick Lamar",
      audio: new Audio(thirst),
    },
  ];
  const [audioNum, setNum] = useState(0);
  const [audio, setAudio] = useState({ audio: null });
  const [getNew, setNew] = useState(false);

  const [activeVideo, setActive] = useState({
    title: "",
    author: "",
    songActive: false,
    isLoaded: false,
  });

  useEffect(() => {
    let randNum = Math.floor(Math.random() * 6);
    setNum(randNum);
    if (getNew) {
      setNew(false);
    }
  }, [getNew]);

  useEffect(() => {
    if (activeVideo.songActive && !activeVideo.isLoaded && audio.audio) {
      audio.audio.load();
      audio.audio.play();
    } else if (activeVideo.songActive && audio.audio) {
      audio.audio.play();
    } else if (!activeVideo.songActive && audio.audio && activeVideo.isLoaded) {
      audio.audio.pause();
    }
  }, [activeVideo.songActive]);

  const playSong = () => {
    if (!audio.audio) {
      console.log(audio.audio);
      setAudio({ audio: videos[audioNum].audio });
    }

    setActive({
      title: videos[audioNum].title,
      author: videos[audioNum].author,
      songActive: true,
      isLoaded: true,
    });
  };

  const pauseSong = () => {
    setActive({
      ...activeVideo,
      songActive: false,
      isLoaded: true,
    });
  };

  return (
    <>
      <MenuContainer />
      <div className={classes.root}>
        <Paper elevation={3} square={false}>
          <Typography variant="h6">
            Click to play a random song. <br />
            Available Songs: <br /> 
            Sea Cruise by Crash the Sea Turtle <br />
            Like I Ain't by TECH N9NE <br />
            Kumbaya by Hopsin <br />
            Dying of Thirst by Kendrick <br />
            Changes by Tupac <br />
            F.N. by Lil Tjay <br />
            Mood Swings by Pop Smoke, Lil Tjay
          </Typography>
          <Card className={classes.main}>
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Typography component="h5" variant="h5">
                  {activeVideo.title ? activeVideo.title : "Click Play"}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {activeVideo.author ? activeVideo.author : ""}
                </Typography>
              </CardContent>
              <div className={classes.controls}>
                {!activeVideo.songActive ? (
                  <IconButton aria-label="play/pause" onClick={playSong}>
                    <PlayArrowIcon className={classes.playIcon} />
                  </IconButton>
                ) : (
                  <IconButton aria-label="play/pause" onClick={pauseSong}>
                    <PauseIcon className={classes.playIcon} />
                  </IconButton>
                )}
              </div>
            </div>
            <CardMedia
              className={classes.cover}
              image={turtlemusic}
              title="Live from space album cover"
            />
          </Card>
        </Paper>
      </div>
    </>
  );
};
