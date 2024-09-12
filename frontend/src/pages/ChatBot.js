import React from 'react';

const ChatBot = () => {
  return (
    <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
      <iframe
        src="https://webchat.botframework.com/embed/your-bot-id?s=YOUR_SECRET_KEY"
        style={{ minWidth: '400px', width: '100%', minHeight: '500px' }}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default ChatBot;
