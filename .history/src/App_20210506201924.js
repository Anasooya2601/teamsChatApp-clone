import React from 'react'

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import Login from './components/LogIn';

// import ChatFeed from './components/ChatFeed';


function App() {

  <section>
  if (!localStorage.getItem('username')) return <Login />;
  </section>
  return (
 
    <div className="App">
   
  <ChatEngine 
  height="100vh"
  projectID='20acf34c-dda7-4ab3-9a5c-f58b22626253'
  userName='Adam'
  userSecret='1234'
   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
  />
 </div>
  );
}
// function SignIn() {

//   const signInWithGoogle = () => {
//     const provider = new firebase.auth.GoogleAuthProvider();
//     auth.signInWithPopup(provider);
//   }
  
//   return (
  
//     <>
  
   
   
//       <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
//       <p>Do not violate the community guidelines or you will be banned for life!</p>
   
//     </>
   
//   )

// }

// function SignOut() {
//   return auth.currentUser && (
//     <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
//   )
// }
export default App;
