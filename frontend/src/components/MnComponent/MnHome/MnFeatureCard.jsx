import React from "react";

const MnFeatureCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default MnFeatureCard;
