import React, { useState } from "react";
import ChatRoom from "../ChatRoom/ChatRoom";
import SignOut from "../SignOut/SignOut";
import "./MainPage.css";

export default function MainPage(props) {
  const [openSettings, setOpenSettings] = useState("closeSettings");

  const openSettingsMenu = (e) => {
    if (openSettings == "openSettings") setOpenSettings("closeSettings");
    else setOpenSettings("openSettings");
  };

  return (
    <>
      <header>
        <div className="logo">VINHAN</div>
        <div className="userSettings" onClick={openSettingsMenu}>
          <img src={props.auth.currentUser.photoURL} className="userIcon"></img>
          <div className="buttonSettings">
            <p className="userName">{props.auth.currentUser.displayName}</p>
            <p>Settings</p>
          </div>
        </div>
        <div className={`${openSettings}`}>
          <SignOut auth={props.auth}></SignOut>
        </div>
      </header>
      <section>
        <ChatRoom firebase={props.firebase} auth={props.auth} />
      </section>
    </>
  );
}
