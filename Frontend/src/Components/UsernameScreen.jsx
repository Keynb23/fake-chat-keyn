// Frontend/src/Components/UsernameScreen.jsx
import { useState } from 'react';
import './UsernameScreen.css';

const UsernameScreen = ({ onSetUser }) => {
    const [newUsername, setNewUsername] = useState('');

    const handleSubmit = () => {
        if (newUsername.trim()) {
            onSetUser(newUsername); // Send the name up to App.jsx
        }
    };

    return (
        <div className="UsernameScreen-Container">
            <div className="userNameSetter">
                <h2>Enter Your Username</h2>
                <p>Join the server to start chatting</p>
                
                <input 
                    type="text"
                    placeholder="Username..."
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    // Allow pressing "Enter" key to submit
                    onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                />
                
                <button className="UsernameSetBtn" onClick={handleSubmit}>
                    Enter Server
                </button>
            </div>
        </div>
    );
};

export default UsernameScreen;