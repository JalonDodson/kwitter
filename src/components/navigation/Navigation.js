import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { HomeScreen, Profile, NotFoundScreen, Current } from "../../screens";
import { ConnectedRoute } from "../connected-route/ConnectedRoute";

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
        component={Current}
      />
      <ConnectedRoute path="*" component={NotFoundScreen} />
    </Switch>
  </BrowserRouter>
);
