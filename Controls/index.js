import React, { Component } from 'react';
import './style.scss';

export default ({ onClick }) => {
  const [myMessage, setMyMessage] = React.useState('');
  const [userTyping, setUserTyping] = React.useState('');

  React.useEffect(() => {
    window.Chat.onTyping((username) => {
      setUserTyping(username);
    });
  }, []);

  const handleMessage = (e) => {
    setMyMessage(e.target.value);
  };

  const onSendMessage = (e) => {
    e.preventDefault();
    window.Chat.sendMessage(myMessage);
    setMyMessage('');
  };
  return (
    <div className="controls">
      {userTyping && <p>{userTyping} is typing...</p>}
      <form>
        <input
          placeholder="Say something"
          onChange={handleMessage}
          value={myMessage}
        />
        <button onClick={onSendMessage}>Send</button>
      </form>
    </div>
  );
};
