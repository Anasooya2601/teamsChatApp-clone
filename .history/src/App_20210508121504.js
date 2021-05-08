import React from 'react'

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import LogIn from './components/LogIn';
// import ChatFeed from './components/ChatFeed';
const projectID = '54053b1c-8f47-4c4e-90bf-b5df1f28665b';
function App() {
  if (!localStorage.getItem('username')) return <LogIn/>;
  return (
 
    
  <ChatEngine 
  height="100vh"
  projectID = {projectID}
// userName="ana"
// userSecret="ana123"
  userName={localStorage.getItem('username')}
  userSecret={localStorage.getItem('password')}
 renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
  // onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
  />
 
  );
}

export default App;