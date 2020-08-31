import React from "react";
import { MenuContainer } from "../components";
// import NewsFeed from '../components/NewsFeed';

export const ProfileScreen = ({ username, user }) => (
  <>
    <MenuContainer />
    <div>
      <h2>Welcome, {user.displayName}!</h2>
      
<img src="../../utils/logo.png" alt="Kwitter logo"/>
    </div>
  </>
);
