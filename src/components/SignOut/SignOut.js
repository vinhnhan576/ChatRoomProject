import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./SignOut.css";
import logoutIcon from "../../images/iconLogout.png";

export default function SignOut(props) {
  return (
    props.auth.currentUser && (
      <div className="SignOut">
        <img src={logoutIcon}></img>
        <button onClick={() => props.auth.signOut()}>Sign Out</button>
      </div>
    )
  );
}
