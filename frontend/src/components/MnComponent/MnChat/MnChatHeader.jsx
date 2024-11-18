// src/components/MnChatHeader.jsx
import React from 'react';

const MnChatHeader = ({ channelName, participants }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-t-lg">
      <h2 className="text-xl font-semibold">{channelName}</h2>
      <p className="text-sm">{participants} Participants</p>
    </div>
  );
};

export default MnChatHeader;
