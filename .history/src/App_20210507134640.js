
import React from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase'
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import Login from './components/LogIn';
// import ChatFeed from './components/ChatFeed';

firebase.initializeApp({
  apiKey: "AIzaSyD_gO6wgxb9HVgHoIJOL0tEWTpRXYgvHlU",
  authDomain: "chatapp-26eb3.firebaseapp.com",
  projectId: "chatapp-26eb3",
  storageBucket: "chatapp-26eb3.appspot.com",
  messagingSenderId: "371207442697",
  appId: "1:371207442697:web:486481dbf6de075e0e03d8",
  measurementId: "G-X09SF88D23"
})
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();


function App() {
  if (!localStorage.getItem('username')) return <Login/>;
  function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  return (
 <>
    <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button> 
  <ChatEngine 
  height="100vh"
  projectID='20acf34c-dda7-4ab3-9a5c-f58b22626253'
  userName='Adam'
  userSecret='1234'
   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
  />
 </>
  );
}

  // return (
  
  //   <>
  
   
   
  //     <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
  //     <p>Do not violate the community guidelines or you will be banned for life!</p>
   
  //   </>
   
  // )

}
function SignOut() {
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}
export default App;
