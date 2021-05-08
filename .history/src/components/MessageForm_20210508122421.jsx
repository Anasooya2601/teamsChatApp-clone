import { useState } from 'react';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';
import { sendMessage, isTyping } from 'react-chat-engine';

const MessageForm = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }

    setValue('');
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: '' });
  };
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

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: 'none' }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
      </button>
      <button style={{marginLeft:"20px"}} onClick={handleLogout}>Logout</button>
    </form>
  );
};

export default MessageForm;
