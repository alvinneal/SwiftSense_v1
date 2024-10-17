import React, { useState } from 'react';
import { Chatbot } from 'react-chatbot-kit';
import config from './config';
import MessageParser from './MessageParser';
import ActionProvider from './ActionProvider';
import 'react-chatbot-kit/build/main.css';
import './App.css';
import chatIcon from './SS_logo.png'; // Adjust the path if needed

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevState => !prevState);
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={toggleChatbot} className="chatbot-toggle-button">
          <img 
            src={chatIcon} 
            alt="Chatbot Toggle Icon" 
            className={showChatbot ? 'chatbot-icon open' : 'chatbot-icon close'}
          />
        </button>
        {showChatbot && (
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        )}
      </header>
    </div>
  );
}

export default App;