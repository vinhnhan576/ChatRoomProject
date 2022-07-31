import React from "react";
import "./ChatMessage.css";

export default function ChatMessage(props) {
  const { text, uid, photoURL, displayName } = props.message;

  const messageType = uid === props.auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageType}`}>
        <img src={photoURL} alt="" />
        <div className="text">
          <span className="username">{displayName}</span>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
