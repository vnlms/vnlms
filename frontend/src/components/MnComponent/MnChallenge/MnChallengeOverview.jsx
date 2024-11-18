// src/components/MnChallengeOverview.jsx
import React from "react";
import MnChallengeCard from "./MnChallengeCard";

const MnChallengeOverview = ({ challenges }) => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Weekly and Monthly Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {challenges.map((challenge) => (
          <MnChallengeCard key={challenge.id} challenge={challenge} />
        ))}
      </div>
    </div>
  );
};

export default MnChallengeOverview;
