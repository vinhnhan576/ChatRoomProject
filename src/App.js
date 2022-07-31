import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import ChatRoom from "./components/ChatRoom/ChatRoom";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import MainPage from "./components/MainPage/MainPage";

firebase.initializeApp({
  apiKey: "AIzaSyC3uz-AHw4usKkFm5cjwFhIG6xbYa-GybI",
  authDomain: "chatprojectbyvnhan.firebaseapp.com",
  projectId: "chatprojectbyvnhan",
  storageBucket: "chatprojectbyvnhan.appspot.com",
  messagingSenderId: "872740841204",
  appId: "1:872740841204:web:e42c9f2f721710d07f60a1",
  measurementId: "G-61PR4GHQJ8",
});

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header></header>
      <section>
        {user ? (
          <MainPage auth={auth} firebase={firebase} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section>
    </div>
  );
}

export default App;
