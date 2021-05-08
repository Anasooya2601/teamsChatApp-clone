import MessageForm from './MessageForm';
import MyMessage from './MyMessage'
import PeopleMessage from './PeopleMessage'
import axios from 'axios';
const ChatFeed = (props) => {
  const{chats,activeChat,userName,messages}=props
  const chat =chats && chats[activeChat];
  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));
const renderMessages=()=>{
    const keys=Object.keys(messages)

    return keys.map((key,index)=>{
        const message=messages[key];
        const lastMessageKey=index===0?null:keys[index-1]
        const isMyMessage = userName === message.sender.username;
return(
    <div key={`msg_${index}`} style={{ width: '100%' }}>
    <div className="message-block">
    {isMyMessage
      ? <MyMessage message={message} />
      : <PeopleMessage message={message} lastMessage={messages[lastMessageKey]} />}
  </div>
  <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
  </div>
)
    })
}
const handleLogout= async (e)=>{
  const username = LoginForm.userName;
   const password = LoginForm.password;
   e.preventDefault();

   const authObject = { 'Project-ID': "74869fe0-0cb7-4eff-bfb7-b47888babb20", 'User-Name': username, 
                           'User-Secret': password };
   
                           
                    
       localStorage.removeItem ('username', username);
       localStorage.removeItem('password', password);

       window.location.reload();

   
}
if (!chat) return 'Loading...';

return (
  <div className="chat-feed">
    <div className="chat-title-container">
      <div className="chat-title">{chat?.title}</div>
      <div className="chat-subtitle">
      <button style={{marginLeft:"20px"}} onClick={handleLogout}>Logout</button>
        {chat.people.map((person) => ` ${person.person.username}`)}
      </div>
    </div>
    {renderMessages()}
    <div style={{ height: '100px' }} />
    <div className="message-form-container">
      <MessageForm {...props} chatId={activeChat} />
    </div>
  </div>
); 


}

export default ChatFeed
