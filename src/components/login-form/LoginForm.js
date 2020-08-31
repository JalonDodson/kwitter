import React, { useState } from "react";
import ProptTypes from "prop-types";
import "./LoginForm.css";

// material-ui stuff
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export const LoginForm = ({ login, loading, error, register, user, users }) => {
  // material-ui stuff
  const classes = useStyles();
  // end of material-ui stuff
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [newUser, setNewUser] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const [isRegister, setRegister] = useState(false);
  const [userRegistered, setUserRegistered] = useState(false);

  const handleSetRegister = (ev) => {
    ev.preventDefault();
    setRegister(true);
  };

  const handleLogin = (event) => {

    event.preventDefault();
    user(state.username);
    // users()
    login(state);
  };

  const handleRegister = (event) => {
    event.preventDefault();

    console.log("working");

    register(newUser);
    setUserRegistered(true);
    setRegister(false);
  };

  const handleRegistration = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setNewUser((prevState) => ({ ...prevState, [inputName]: inputValue }));
    console.log("plz work", newUser);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return !isRegister ? (
    <>
      <form className={classes.root} id="login-form" onSubmit={handleLogin}>
        <div id="inputs">
          {userRegistered ? (
            <Typography
              variant="overline"
              id="success"
              className={classes.root}
            >
              You have successfully registered. Please sign in!
            </Typography>
          ) : null}
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Username</InputLabel>
            <OutlinedInput
              type="text"
              name="username"
              autoFocus
              required
              className="component-outlined"
              value={state.username}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput
              type="password"
              name="password"
              required
              className="component-outlined"
              value={state.password}
              onChange={handleChange}
            />
          </FormControl>
        </div>
        <div id="btns">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            id="login-btn"
            disabled={loading}
          >
            Login
          </Button>
          <Button
            type="button"
            variant="contained"
            color="primary"
            id="register-btn"
            disabled={loading}
            onClick={handleSetRegister}
          >
            Register
          </Button>
        </div>
        <Typography
          variant="overline"
          display="block"
          id="forgot"
          className={classes.root}
        >
          FORGOT PASSWORD?
        </Typography>
        {loading && <CircularProgress id="loading" />}
      </form>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  ) : (
    <>
      <form className={classes.root} id="login-form" onSubmit={handleRegister}>
        <div id="inputs">
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Username</InputLabel>
            <OutlinedInput
              type="text"
              name="username"
              autoFocus
              required
              className="component-outlined"
              value={newUser.username}
              onChange={handleRegistration}
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Display Name</InputLabel>
            <OutlinedInput
              type="displayName"
              name="displayName"
              required
              className="component-outlined"
              value={newUser.displayName}
              onChange={handleRegistration}
            />
          </FormControl>
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput
              type="password"
              name="password"
              required
              className="component-outlined"
              value={newUser.password}
              onChange={handleRegistration}
            />
          </FormControl>
        </div>
        <div id="btns">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            id="registration"
          >
            Register
          </Button>
        </div>
        <Typography
          variant="overline"
          display="block"
          id="forgot"
          className={classes.root}
        >
          FORGOT PASSWORD?
        </Typography>
        {loading && <CircularProgress id="loading" />}
      </form>

      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};

LoginForm.propTypes = {
  login: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
