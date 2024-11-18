// src/components/MnChatChannel.jsx
import React, { useState } from 'react';
import MnChatHeader from './MnChatHeader';
import MnChatMessage from './MnChatMessage';
import MnChatInput from './MnChatInput';
// import MnChatHeader from './MnChatHeader';
// import MnChatMessage from './MnChatMessage';
// import MnChatInput from './MnChatInput';

const MnChatChannel = ({ channelName, participants, messages }) => {
  const [chatMessages, setChatMessages] = useState(messages);

  const handleSendMessage = (message) => {
    const newMessage = {
      user: { name: 'User', avatar: 'https://via.placeholder.com/150' },
      message,
      timestamp: new Date().toLocaleTimeString(),
    };
    setChatMessages([...chatMessages, newMessage]);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-lg mx-auto">
      <MnChatHeader channelName={channelName} participants={participants} />
      <div className="h-64 overflow-y-auto">
        {chatMessages.map((msg, index) => (
          <MnChatMessage key={index} {...msg} />
        ))}
      </div>
      <MnChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default MnChatChannel;
