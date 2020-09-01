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

export const UserCard = ({ user, username, message }) => {
  const pictureURL = (username) =>
    `https://kwitter-api.herokuapp.com/users/${username}/picture`;

  const classes = userCardStyles();

  return (
    <Card className={classes.cards}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`${user.displayName}'s profile picture`}
          height="120"
          image={pictureURL(username)}
          title={`${user.displayName}'s profile picture`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {user.displayName} says..
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {message}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton size="small" color="primary">
          <img src={Image} className={classes.like} alt="like icon" />
        </IconButton>
        <IconButton size="small" color="primary">
          <ClearIcon className={classes.delete} />
        </IconButton>
      </CardActions>
    </Card>
  );
};
