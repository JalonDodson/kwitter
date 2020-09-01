import React, { createRef } from "react";
import { MenuContainer } from "../components";
// import NewsFeed from '../components/NewsFeed';

const fileInput = createRef();

export const ProfileScreen = ({ username, user, addPhoto }) => {
  const handleUpload = (ev) => {
    ev.preventDefault();
    console.log(`Picture selected: ${fileInput.current.files[0].name}`);
    addPhoto(username, fileInput.current.files[0])
  };

  return (
    <>
      <MenuContainer />
      <div>
        <h2>Welcome, {user.displayName}!</h2>

        <img src={require("../utils/logo.png")} alt="Kwitter logo" />
        <form onSubmit={handleUpload}>
          <input type="file" id="file-upload" ref={fileInput} />
          <button type="submit">Upload Photo</button>
        </form>
      </div>
    </>
  );
};
