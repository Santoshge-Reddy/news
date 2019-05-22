// import React from "react";
import firebase from "firebase";

export default () => {
  const logOutUser = () => {
    firebase.auth().signOut();
  };
  logOutUser();
};
