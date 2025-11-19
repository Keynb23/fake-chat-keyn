// Frontend/src/App.jsx
import { useState } from 'react';
import './App.css';
import ChatRoom from './Components/ChatRoom.jsx';
import Chat from './Components/Chat.jsx';
import UsernameScreen from './Components/UsernameScreen.jsx';

const App = () => {
  // 1. Initialize user as NULL (so we know they aren't logged in yet)
  const [currentUser, setCurrentUser] = useState(null);

  // Channels State
  const [channels] = useState(["Main Chat", "Greg", "Basketball", "Memes"]);
  const [activeChannel, setActiveChannel] = useState(channels[0]);

  // Messages State
  const [messages, setMessages] = useState({
     "Main Chat": [], "Greg": [], "Basketball": [], "Memes": []
  });

  // --- THE GATEKEEPER ---
  // If no user is set, ONLY show the Username Screen
  if (!currentUser) {
      return <UsernameScreen onSetUser={setCurrentUser} />;
  }

  // --- LOGGED IN LOGIC ---
  const sendMessage = (text) => {
      const newMessage = {
          id: Date.now(),
          sender: currentUser, 
          text: text,
      };

      setMessages(prev => ({
          ...prev,
          [activeChannel]: [...(prev[activeChannel] || []), newMessage]
      }));
  };

  return (
    <div className="App-Container">
      <div className="Sidebar">
        <ChatRoom 
            channels={channels}
            activeChannel={activeChannel} 
            onChannelSelect={setActiveChannel} 
        />
        {/* Logout Button (Optional) */}
        <div style={{padding: '20px', borderTop: '1px solid var(--ac1)'}}>
            <p style={{fontSize:'0.8rem', color:'grey', marginBottom:'5px'}}>Logged in as:</p>
            <h3 style={{color: 'white'}}>{currentUser}</h3>
            <button 
                onClick={() => setCurrentUser(null)} 
                style={{marginTop: '10px', background: 'transparent', color: 'red', border: 'none', cursor: 'pointer'}}
            >
                Log Out
            </button>
        </div>
      </div>


      <div className="ChatSection">
        <Chat 
            activeChannel={activeChannel}
            messages={messages[activeChannel] || []}
            currentUser={currentUser}
            onSendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default App;