// src/components/MnChallengeParticipation.jsx
import React from "react";

const MnChallengeParticipation = ({ challenge }) => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">{challenge.name}</h2>
      <p className="text-xl text-gray-600 mb-4">Duration: {challenge.duration}</p>
      <h3 className="text-2xl font-semibold mb-4">Challenge Rules:</h3>
      <ul className="list-disc pl-6 mb-6">
        {challenge.rules.map((rule, index) => (
          <li key={index} className="text-gray-700">{rule}</li>
        ))}
      </ul>
      <p className="text-xl text-gray-600 mb-4">{challenge.description}</p>
      <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200">
        Join Challenge
      </button>
    </div>
  );
};

export default MnChallengeParticipation;
