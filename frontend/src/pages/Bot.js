// import React from 'react'

// function Chatbot() {
//   return (
//     <div>Welcome to Chatbot</div>
//   )
// }

// export default Chatbot

import ChatBot from './ChatBot';

function App() {
  return (
    <div className="App" style={ {marginTop: '20px'}}>
      <h1>Hi! I am Tira...Your AI Assistant</h1>
      <h4>Ask me anything!</h4>
      <ChatBot />
    </div>
  );
}

export default App;
