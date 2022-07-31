import React, { useRef, useState } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
import "./ChatRoom.css";
import sendIcon from "../../images/sendButton.png";
import likeIcon from "../../images/likeIcon.png";

import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

export default function ChatRoom(props) {
  const firestore = props.firebase.firestore();
  const messageRef = firestore.collection("messages");
  const query = messageRef.orderBy("createdAt");
  const [message] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");
  const [textIcon, setTextIcon] = useState(likeIcon);

  const dummy = useRef();

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL, displayName } = props.auth.currentUser;
    if (formValue.trim().length !== 0)
      await messageRef.add({
        text: formValue,
        createdAt: props.firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        displayName,
      });

    setFormValue("");
    setTextIcon(likeIcon);
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  const onInputChange = (e) => {
    setFormValue(e.target.value);
    if (!e.target.value) setTextIcon(likeIcon);
    else setTextIcon(sendIcon);
  };

  return (
    <>
      <div className="ChatRoom">
        <div className="Messages">
          {message &&
            message.map((msg) => (
              <ChatMessage key={msg.id} message={msg} auth={props.auth} />
            ))}
          <div ref={dummy}></div>
          <div className="dummy"></div>
        </div>
        <form onSubmit={sendMessage}>
          <input value={formValue} onChange={onInputChange} />
          <img type="submit" src={textIcon}></img>
        </form>
      </div>
    </>
  );
}
