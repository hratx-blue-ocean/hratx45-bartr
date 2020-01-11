import React from "react";
import { connect } from "react-redux";
//author -- Matt Lucas

const UserProfile = ({}) => {
  return (
    <div id="ml-userProfile-master">
      <div id="ml-fake-navbar">this is fake navbar</div>
      <div id="ml-avatar">this is where the photo will go</div>
      <div id="ml-username">Username</div>
      <div id="ml-location">location</div>
      <button id="ml-youritems">your items</button>
      <button id="ml-wishlist">wishlist</button>
      <button id="ml-activeoffers">active offers</button>
      <button id="ml-upload">upload an item</button>
      <div id="ml-recentactivity">recent activity</div>
      <div id="ml-completedbarters">completed barters</div>
    </div>
  );
};
export default UserProfile;
