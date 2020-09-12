import React from 'react';

import { topStyles } from "../../hooks/topStyles";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const TopLikes = (props) => {
  const classes = topStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
            Today's Top Post
        </Typography>
        <Typography variant="caption" color="textPrimary">
          Author: {props.author}
          <br />
          Post Date: Today at {props.time}
          <br />
          Likes: {props.likes}
        </Typography>
        <Typography className={classes.said} color="textPrimary" gutterBottom>
        What did they say?
        </Typography>
        <Typography variant="caption" component="p">
        {props.message}
        </Typography>
      </CardContent>
    </Card>
  );
}