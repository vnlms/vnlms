// src/components/MnChallengeLeaderboard.jsx
import React from "react";

const MnChallengeLeaderboard = ({ leaderboard }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
      <h3 className="text-2xl font-semibold mb-4">Leaderboard</h3>
      <ul className="space-y-4">
        {leaderboard.map((user, index) => (
          <li key={index} className="flex justify-between items-center">
            <div>
              <span className="font-semibold">{user.name}</span>
              <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
              <span className="text-gray-500">Completed: {user.completedChallenges} challenges</span>
            </div>
            <div className="text-lg font-semibold">{user.points} pts</div>
            <span className="bg-yellow-300 text-white px-4 py-1 rounded-full">{user.badge}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MnChallengeLeaderboard;
