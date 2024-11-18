// src/components/MnNotifications.jsx
import React from 'react';

const MnNotifications = ({ notifications }) => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold mb-4">Notifications</h3>
      <ul className="space-y-3">
        {notifications.map((notif, index) => (
          <li key={index} className="text-sm">
            {notif.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MnNotifications;
