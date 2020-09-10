import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, Profile, NotFoundScreen, TheCurrent } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";
import { MusicPlayer } from "../Player";

export const Navigation = () => (
  <BrowserRouter>
    <Switch>
      <ConnectedRoute
        exact
        path="/"
        redirectIfAuthenticated
        component={HomeScreen}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/profiles/:username"
        component={Profile}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/thecurrent"
        component={TheCurrent}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/streamplayer"
        component={MusicPlayer}
      />
      {/* <ConnectedRoute
        exact
        isProtected
        path="/some-other-thing"
        component={Stupid}
      />
      <ConnectedRoute
        exact
        isProtected
        path="/we-may-decide"
        component={Things}
      /> */}
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
