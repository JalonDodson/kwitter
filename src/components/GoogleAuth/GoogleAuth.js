import React, { useState } from "react";
import { useGoogleLogin, GoogleLogin, GoogleLogout } from "react-google-login";

export const GoogleAuth = () => {
  const [isLogged, setLogged] = useState(false);
  const [accessToken, setToken] = useState("");

  const login = (res) => {
    if (res.accessToken) {
      setLogged(true);
      setToken(res.accessToken);
    }
    console.log(res)
  };

  const logout = () => {
    setLogged(false);
    setToken("");
  };

  const handleLogoutFail = (res) => {
    console.table("Google Logout failed", res);
  };

  const handleLoginFail = (res) => {
    console.table("Google Login failed.", res);
  };

  return (
    <>
      {isLogged ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          buttonText="Sign Out"
          onLogoutSuccess={logout}
          onFailure={handleLogoutFail}
        />
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Sign In"
          onSuccess={login}
          onFailure={handleLoginFail}
          cookiePolicy={"single_host_origin"}
          responseType="code,token"
          fetchBasicProfile
        />
      )}
      {accessToken ? console.log(`Access Token: ${accessToken}`) : null}
    </>
  );
};
