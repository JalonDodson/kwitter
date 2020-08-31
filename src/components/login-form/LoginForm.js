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

export const LoginForm = ({ login, loading, error }) => {
  // material-ui stuff
  const classes = useStyles();
  // end of material-ui stuff
  // Not to be confused with "this.setState" in classes
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();

    login(state);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  return (
    <React.Fragment>
      <form className={classes.root} id="login-form" onSubmit={handleLogin}>
        <div id="inputs">
          <FormControl variant="outlined">
            <InputLabel htmlFor="component-outlined">Username</InputLabel>
            <OutlinedInput
              type="text"
              name="username"
              autoFocus
              required
              id="component-outlined"
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
              id="component-outlined"
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
            type="submit"
            variant="contained"
            color="primary"
            id="register-btn"
            disabled={loading}
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
    </React.Fragment>
  );
};

LoginForm.propTypes = {
  login: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
