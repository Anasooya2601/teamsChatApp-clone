import Messageform from './MessageForm'
import MyMessage from './MyMessage'
import PeopleMessage from './PeopleMessage'

const ChatFeed = (props) => {
  const{chats,activeChat,userName,messages}=props
  const chat =chats && chats[activeChat];
const renderMessages=()=>{
    const keys=Object.keys(messages)
    console.log(keys);
}
    return (
     <div>
      ChatFeed
     </div>
    )
}

export default ChatFeed
