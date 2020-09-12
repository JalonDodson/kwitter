import React from "react";

import { loginStyles } from "../../hooks/loginStyles";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";

export const Register = (props) => {
  const classes = loginStyles();
  return (
    <form className={classes.root} id="login-form" onSubmit={props.register}>
      <div id="inputs" className={classes.inputs}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Username</InputLabel>
          <OutlinedInput
            autoFocus
            className="component-outlined"
            onChange={props.handleNew}
            name="username"
            required
            type="text"
            value={props.newUser}
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Display Name</InputLabel>
          <OutlinedInput
            className="component-outlined"
            onChange={props.handleNew}
            name="displayName"
            required
            type="displayName"
            value={props.displayName}
          />
        </FormControl>
        <FormControl variant="outlined">
          <InputLabel htmlFor="component-outlined">Password</InputLabel>
          <OutlinedInput
            className="component-outlined"
            onChange={props.handleNew}
            name="password"
            required
            type="password"
            value={props.password}
          />
        </FormControl>
      </div>
      <div className={classes.buttons}>
        <Button
          color="primary"
          className={classes.registration}
          type="submit"
          variant="contained"
        >
          Register
        </Button>
        <Button
          className={classes.toLogin}
          onClick={props.disableRegister}
          startIcon={<ArrowBackIcon />}
          variant="text"
        >
          Back to Login
        </Button>
      </div>
      {props.loading && <CircularProgress id="loading" />}
    </form>
  );
};
