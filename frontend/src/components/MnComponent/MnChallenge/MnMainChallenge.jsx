// src/pages/MnChallenges.jsx
import React from "react";
// import MnChallengeOverview from "../components/MnChallengeOverview";
// import MnChallengeLeaderboard from "../components/MnChallengeLeaderboard";
import MnChallengeOverview from "./MnChallengeOverview";
import MnChallengeLeaderboard from "./MnChallengeLeaderboard";

const MnMainChallenges = () => {
  const challenges = [
    {
      id: 1,
      name: "Create a Vision Board in 7 Days",
      duration: "7 Days",
      description: "A fun and inspiring challenge to manifest your dreams by creating a vision board.",
      rules: [
        "Create a vision board with your goals.",
        "Share a photo of it on social media.",
        "Tag us with #MyVisionBoardChallenge."
      ]
    },
    {
      id: 2,
      name: "Write a Gratitude Journal Daily for 30 Days",
      duration: "30 Days",
      description: "Commit to writing something you are grateful for every day for a month.",
      rules: [
        "Write 3 things you are grateful for each day.",
        "Post your daily entries on social media.",
        "Tag us with #GratitudeChallenge."
      ]
    }
  ];

  const leaderboard = [
    { name: "John Doe", completedChallenges: 5, points: 150, badge: "Champion" },
    { name: "Jane Smith", completedChallenges: 4, points: 120, badge: "Elite" },
    { name: "Alice Johnson", completedChallenges: 3, points: 90, badge: "Pro" }
  ];

  return (
    <div>
      <MnChallengeOverview challenges={challenges} />
      <MnChallengeLeaderboard leaderboard={leaderboard} />
    </div>
  );
};

export default MnMainChallenges;
