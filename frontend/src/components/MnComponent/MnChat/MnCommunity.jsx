// src/pages/MnCommunity.jsx
import React from 'react';
import MnChatChannel from './MnChatChannel';
import MnNotifications from './MnNotifications';
import MnStudyGroupsList from './MnStudyGroupsList';
// import MnChatChannel from '../components/MnChatChannel';
// import MnStudyGroupsList from '../components/MnStudyGroupsList';
// import MnNotifications from '../components/MnNotifications';

const MnCommunity = () => {
  const channels = [
    { name: 'Manifestation Techniques', participants: 12, messages: [] },
    { name: 'Study Tips', participants: 10, messages: [] },
    { name: 'Ask a Tutor', participants: 15, messages: [] },
  ];

  const groups = [
    { id: 1, name: 'Math Study Group', description: 'A group for discussing math problems.' },
    { id: 2, name: 'English Literature Group', description: 'A group for English literature enthusiasts.' },
  ];

  const notifications = [
    { message: 'New reply in the "Study Tips" channel' },
    { message: 'You have been added to the "Math Study Group"' },
  ];

  const handleJoinGroup = (groupId) => {
    alert(`Joined group: ${groupId}`);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between p-6">
        <div className="w-full md:w-2/3">
          <MnChatChannel channelName="Manifestation Techniques" participants={12} messages={[]} />
        </div>
        <div className="w-full md:w-1/3 mt-6 md:mt-0">
          <MnNotifications notifications={notifications} />
        </div>
      </div>
      <MnStudyGroupsList groups={groups} onJoinGroup={handleJoinGroup} />
    </div>
  );
};

export default MnCommunity;
