// src/components/MnChatMessage.jsx
import React from 'react';

const MnChatMessage = ({ user, message, timestamp }) => {
  return (
    <div className="flex items-start space-x-3 p-3">
      <div className="flex-shrink-0">
        <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="font-semibold">{user.name}</span>
          <span className="text-sm text-gray-500">{timestamp}</span>
        </div>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  );
};

export default MnChatMessage;
