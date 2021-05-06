
import './App.css';
import { ChatEngine } from 'react-chat-engine';
IMPORT ChatFeed From './components/ChatFeed';
function App() {
  return (
  <ChatEngine 
  height="100vh"
  projectID='20acf34c-dda7-4ab3-9a5c-f58b22626253'
  userName='Adam'
  userSecret='1234'
  renderChatFeed={(chatAppProps)=><ChatApp{...chatAppProps}/>}
  />
  );
}

export default App;
