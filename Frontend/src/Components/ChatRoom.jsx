// Frontend/src/Components/ChatRoom.jsx
import './ChatRoom.css';

const ChatRoom = ({ channels, activeChannel, onChannelSelect }) => {
    return (
        <div className="ChatRoom-Container">
            <nav className="ChatRoom-Nav">
                <h2>Chat Rooms</h2>
                <ul className="ChatRoom-List">
                    {channels.map((room) => (
                        <li 
                            key={room}
                            className={`ChatRoom-Item ${activeChannel === room ? 'active' : ''}`} 
                            onClick={() => onChannelSelect(room)}
                        >
                            # {room}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default ChatRoom;