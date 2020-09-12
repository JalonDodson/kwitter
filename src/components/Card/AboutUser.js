import React from 'react';

import { userStyles } from "../../hooks/userStyles";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export const AboutUser = (props) => {
  const classes = userStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
            About {props.splitName}!
        </Typography>
        <Typography variant="caption" color="textPrimary">
          Name: {props.name}
          <br />
          Username: {props.username}
          <br />
          Account created on: {props.creationDate}
          <br />
          Account last updated on: {props.lastUpdated}
          <br />
          Google ID: {props.googleId}
          <br />
        </Typography>
        <Typography className={classes.bio} color="textPrimary" gutterBottom>
        Your Bio
        </Typography>
        <Typography variant="caption" component="p">
        {props.bio}
        </Typography>
      </CardContent>
    </Card>
  );
}