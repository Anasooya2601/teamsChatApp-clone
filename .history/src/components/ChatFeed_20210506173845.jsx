import Messageform from './MessageForm'
import MyMessage from './MyMessage'
import PeopleMessage from './PeopleMessage'

const ChatFeed = (props) => {
  const{chats,activeChat,userName,messages}=props
  const chat =chats && chats[activeChat];
  console.log(chat,userName,messages)
    return (
     <div>
      ChatFeed
     </div>
    )
}

export default ChatFeed
