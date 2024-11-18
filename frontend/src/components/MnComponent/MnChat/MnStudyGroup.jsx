// src/components/MnStudyGroup.jsx
import React from 'react';

const MnStudyGroup = ({ group, onJoin }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{group.name}</h3>
      <p className="text-gray-600">{group.description}</p>
      <button
        onClick={() => onJoin(group.id)}
        className="bg-blue-500 text-white p-2 rounded-lg mt-4 hover:bg-blue-600"
      >
        Join Group
      </button>
    </div>
  );
};

export default MnStudyGroup;
