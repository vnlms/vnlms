import React from "react";

const MnTestimonial = ({ name, quote, image }) => {
  return (
    <div className="flex items-center bg-white shadow-lg p-6 rounded-lg">
      <img
        src={image}
        alt={name}
        className="h-16 w-16 rounded-full mr-4"
      />
      <div>
        <p className="italic">"{quote}"</p>
        <p className="font-bold mt-2">- {name}</p>
      </div>
    </div>
  );
};

export default MnTestimonial;
