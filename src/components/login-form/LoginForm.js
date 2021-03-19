import React, { useState } from "react";
import ProptTypes from "prop-types";

import { loginStyles } from "../../hooks/loginStyles";
import { Login } from "../Forms/Login";
import { Register } from "../Forms/Register";
import logo from "../../utils/logo.png";

export const LoginForm = ({
  login,
  googleLogin,
  loading,
  error,
  register,
  getUser,
}) => {
  const classes = loginStyles();
  const [called, setCalled] = useState(false);
  const [failure, setFailure] = useState(false);
  const [isRegister, setRegister] = useState(false);
  const [userRegistered, setUserRegistered] = useState(false);
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [newUser, setNewUser] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setState((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  const handleGoogle = async () => {
    const login = window.open(
      "https://kwitter-api.herokuapp.com/auth/google/login",
      "_blank",
      "height=777, width=777, scrollbar=0",
      false
    );
    login.opener.onmessage = (event) => {
      if (event.data.token) {
        const credentials = event.data;
        const { username } = event.data;
        getUser(username);
        googleLogin(credentials);
        login.close();
      }
    };
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (called === false) {
      getUser(state.username);
      login(state);
      setTimeout(() => {
        setCalled(true);
        setFailure(true);
      }, 1000);
    } else {
      getUser(state.username);
      login(state);
      setCalled(false);
      setFailure(false);
    }
  };

  const handleNew = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setNewUser((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  const handleRegister = (event) => {
    event.preventDefault();

    register(newUser);
    setUserRegistered(true);
    setRegister(false);
    setCalled(false);
    setFailure(false);

    setState({
      username: "",
      password: "",
    });
  };

  const handleSetRegister = (ev) => {
    ev.preventDefault();
    setRegister(true);
  };

  return !isRegister ? (
    <>
      <img
        alt="Kwitter logo"
        className={classes.logo}
        src={logo}
      />
      <Login
        registered={userRegistered}
        failure={failure}
        login={handleLogin}
        change={handleChange}
        username={state.username}
        password={state.password}
        loading={loading}
        setRegister={handleSetRegister}
        google={handleGoogle}
      />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  ) : (
    <>
      <Register
        register={handleRegister}
        newUser={newUser.username}
        displayName={newUser.displayName}
        password={newUser.password}
        handleNew={handleNew}
        loading={loading}
        disableRegister={() => setRegister(false)}
      />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
};

LoginForm.propTypes = {
  login: ProptTypes.func.isRequired,
  loading: ProptTypes.bool,
  error: ProptTypes.string,
};
