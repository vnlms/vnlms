// src/components/MnChallengeCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const MnChallengeCard = ({ challenge }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
      <h3 className="text-2xl font-semibold mb-4">{challenge.name}</h3>
      <p className="text-gray-600 mb-4">Duration: {challenge.duration}</p>
      <p className="text-gray-700 mb-4">{challenge.description}</p>
      <Link
        to={`/challenges/${challenge.id}`}
        className="text-blue-500 hover:text-blue-700 inline-block"
      >
        Join Challenge
      </Link>
    </div>
  );
};

export default MnChallengeCard;
