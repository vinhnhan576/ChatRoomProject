import React from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "./SignIn.css";

export default function SignIn(props) {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    props.auth.signInWithPopup(provider);
  };
  return (
    <button className="SignIn" onClick={signInWithGoogle}>
      Sign in with google
    </button>
  );
}
