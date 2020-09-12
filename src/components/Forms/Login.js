import React from "react";

import { loginStyles } from "../../hooks/loginStyles";

import GoogleButton from "react-google-button";

import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Typography from "@material-ui/core/Typography";

export const Login = (props) => {
  const classes = loginStyles();
  return (
    <form className={classes.root} onSubmit={props.login}>
      <div className={classes.inputs}>
        {props.registered ? (
          <Typography variant="overline" className={classes.success}>
            You have successfully registered. Please sign in!
          </Typography>
        ) : null}
        {props.failure && (
          <Typography variant="overline" className={classes.loginFail}>
            You have entered the incorrect username or password, please try
            again!
          </Typography>
        )}
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Username</InputLabel>
          <OutlinedInput
            error={props.failure}
            type="text"
            name="username"
            autoFocus
            required
            className="component-outlined"
            value={props.username}
            onChange={props.change}
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Password</InputLabel>
          <OutlinedInput
            error={props.failure}
            type="password"
            name="password"
            required
            className="component-outlined"
            value={props.password}
            onChange={props.change}
          />
        </FormControl>
      </div>
      <div className={classes.buttons}>
        <Button
          className={classes.login}
          color="primary"
          disabled={props.loading}
          type="submit"
          variant="contained"
        >
          Login
        </Button>
        <Button
          className={classes.register}
          color="primary"
          disabled={props.loading}
          onClick={props.setRegister}
          type="button"
          variant="contained"
        >
          Register
        </Button>
        <GoogleButton className={classes.google} onClick={props.google} />
      </div>
      {props.loading && <CircularProgress className={classes.loading} />}
    </form>
  );
};
