// src/pages/CoursePage.jsx
import React from "react";

const MnParticularCourse = ({ course }) => {
  return (
    <div className="container mx-auto p-6">
      <div className="flex mb-8">
        <img
          src={course.thumbnail}
          alt={course.name}
          className="w-64 h-64 object-cover rounded-lg mr-8"
        />
        <div>
          <h1 className="text-3xl font-bold">{course.name}</h1>
          <p className="text-xl text-gray-600">by {course.tutorName}</p>
          <p className="text-yellow-400">⭐⭐⭐⭐⭐</p>
          <p className="text-lg font-semibold">${course.price}</p>
          <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 mt-4">
            Enroll Now
          </button>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Course Description</h2>
        <p>{course.description}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Tutor's Bio</h2>
        <p>{course.tutorBio}</p>
      </div>

      {/* Add video previews or sample lessons here */}
    </div>
  );
};

export default MnParticularCourse;
