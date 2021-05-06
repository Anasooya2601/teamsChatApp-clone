import React from 'react'
import './App.css';
import { ChatEngine } from 'react-chat-engine';
// import ChatFeed from './components/ChatFeed';
function App() {
  return (
  <ChatEngine 
  height="100vh"
  projectID='20acf34c-dda7-4ab3-9a5c-f58b22626253'
  userName='Adam'
  userSecret='1234'
  // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
  />
  );
}

export default App;
