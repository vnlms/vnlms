// src/components/MnChatInput.jsx
import React, { useState } from 'react';
import { FaPaperclip, FaSmile } from 'react-icons/fa';

const MnChatInput = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="flex items-center space-x-3 p-4 bg-gray-100 rounded-b-lg">
      <button className="text-xl">
        <FaSmile />
      </button>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 p-2 border rounded-lg focus:outline-none"
        placeholder="Type a message..."
      />
      <button className="text-xl">
        <FaPaperclip />
      </button>
      <button onClick={handleSendMessage} className="text-blue-500 font-semibold">
        Send
      </button>
    </div>
  );
};

export default MnChatInput;
