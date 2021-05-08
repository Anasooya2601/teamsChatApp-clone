import React from 'react'

import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';
import Login from './components/LogIn';
// import ChatFeed from './components/ChatFeed';
function App() {
  if (!localStorage.getItem('username')) return <Login/>;
  return (
 
    
  <ChatEngine 
  height="100vh"
  projectID="10cb4af0-77a0-4aa0-83c1-133ca17301db"

  userName='Ana'
  userSecret='ana1234'
   renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
  />
 
  );
}

export default App;