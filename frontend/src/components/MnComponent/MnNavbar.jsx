// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const MnNavbar = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Welcome to the App</h1>
      <div className="grid grid-cols-2 gap-8">
        <Link to="/mn/home" className="bg-blue-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-blue-600">
          page1
        </Link>
        <Link to="/mn/course" className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-green-600">
          Cors
        </Link>
        <Link to="/mn/challenge" className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-green-600">
          Chall
        </Link>
        <Link to="/mn/community" className="bg-green-500 text-white p-6 rounded-lg shadow-lg text-center hover:bg-green-600">
          .commun
        </Link>
      </div>
    </div>
  );
};

export default MnNavbar;
