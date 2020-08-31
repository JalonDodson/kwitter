import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { MenuContainer } from "../components";

const NotFound = ({ location }) => (
  <>
    <MenuContainer />
    <p>Page not found for path {location.pathname}. Please use the button below to go to your profile!</p>
    <Button color="primary"><Link to="/">Go Home</Link></Button>
  </>
);

export const NotFoundScreen = NotFound;
