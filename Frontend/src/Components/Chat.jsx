// Frontend/src/Components/Chat.jsx
import { useState } from 'react';
import './Chat.css';

const Chat = ({ activeChannel, messages, currentUser, onSendMessage }) => {
    // We still keep textInput state here because it's temporary (while typing)
    const [textInput, setTextInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!textInput.trim()) return;

        // Call the function passed down from App.jsx
        onSendMessage(textInput);
        
        setTextInput('');
    };

    return (
        <div className="Chat-Container">
            <div className="Chat-Header">
                <h2># {activeChannel}</h2>
                <p style={{color: 'gray', fontSize: '0.8rem'}}>Talking as {currentUser}</p>
            </div>

            <div className="Messages-List">
                {messages.length === 0 ? (
                    <p style={{color: 'gray', textAlign: 'center', marginTop: '20px'}}>No messages yet.</p>
                ) : (
                    messages.map((msg) => (
                        <div 
                            key={msg.id} 
                            // Check if the message sender matches the currently logged-in user
                            className={msg.sender === currentUser ? 'MessageBubbleYou' : 'MessageBubbleThem'}
                        >
                            <p>{msg.text}</p>
                            <span style={{fontSize: '0.6rem', opacity: 0.7, display: 'block', marginTop: '5px'}}>
                                {msg.sender}
                            </span>
                        </div>
                    ))
                )}
            </div>

            <form className="Text-Bar" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder={`Message #${activeChannel}`} 
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                />
                <button className="SendBtn" type="submit">Send</button>
            </form>
        </div>
    )
}

export default Chat;