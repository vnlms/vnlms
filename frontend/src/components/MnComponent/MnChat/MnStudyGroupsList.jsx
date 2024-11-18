// src/components/MnStudyGroupsList.jsx
import React from 'react';
import MnStudyGroup from './MnStudyGroup';
// import MnStudyGroup from './MnStudyGroup';

const MnStudyGroupsList = ({ groups, onJoinGroup }) => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Study Groups</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groups.map((group) => (
          <MnStudyGroup key={group.id} group={group} onJoin={onJoinGroup} />
        ))}
      </div>
    </div>
  );
};

export default MnStudyGroupsList;
