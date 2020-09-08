import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ClearIcon from "@material-ui/icons/Clear";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { userCardStyles } from "../../hooks/userCardStyles";

import Image from "../../utils/like-icon.png";
import Unlike from "../../utils/unlike-icon.png";

export const UserCard = ({
  message,
  del,
  liked,
  like,
  unlike,
  likesCount,
  photoLoc,
  displayName,
}) => {

  const classes = userCardStyles();
// i just dont understand
// makes me want to choke air
  return (
    <Card className={classes.cards}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`${displayName}'s profile picture`}
          height="120"
          image={photoLoc}
          title={`${displayName}'s profile picture`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {displayName} says..
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {message}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {liked ? (
          <IconButton size="small" color="primary" onClick={unlike}>
            <img src={Image} className={classes.like} alt="unlike icon" />
          </IconButton>
        ) : (
            <IconButton size="small" color="primary" onClick={like}>
              <img src={Unlike} className={classes.like} alt="like icon" />
            </IconButton>
          )}

        <p>{likesCount}</p>
        <IconButton size="small" color="primary" onClick={del}>
          <ClearIcon className={classes.delete} />
        </IconButton>
      </CardActions>
    </Card>
  );
};