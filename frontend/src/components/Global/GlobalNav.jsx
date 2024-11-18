import React from "react";

const GlobalNavbar = () => {
  return (
    <nav className="flex items-center justify-between bg-gray-800 text-white px-6 py-4 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10 w-10" />
      </div>

      {/* Title in the center */}
      <div className="text-xl font-semibold">
        Hisab Kitab
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-6">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
          Register
        </button>
        <button className="text-gray-300 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.607-10.607 7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
        <img
          src="/profile.jpg"
          alt="Profile"
          className="h-10 w-10 rounded-full border-2 border-gray-300"
        />
      </div>
    </nav>
  );
};

export default GlobalNavbar;
