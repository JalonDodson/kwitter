import React, { useState } from "react";
import { useGoogleLogin, GoogleLogin, GoogleLogout } from "react-google-login";

const CLIENT_ID =
  "581039245535-affjqmpscsb62d7f6pgkf9ij509bnsu0.apps.googleusercontent.com";

export const GoogleAuth = () => {
  const [isLogged, setLogged] = useState(false);
  const [accessToken, setToken] = useState("");

  const login = (res) => {
    if (res.accessToken) {
      setLogged(true);
      setToken(res.accessToken);
    }
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

  const userInfo = (res) => {
      console.log(res);
  }

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
          fetchBasicProfile={userInfo}
        />
      )}
      {accessToken ? console.log(`Access Token: ${accessToken}`) : null}
    </>
  );
};
