// src/components/CourseCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const MnCourseCard = ({ course }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
      <img
        src={course.thumbnail}
        alt={course.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
      <p className="text-gray-600 mb-2">by {course.tutorName}</p>
      <div className="flex items-center space-x-1 mb-2">
        <span className="text-yellow-400">⭐⭐⭐⭐⭐</span> {/* Placeholder for ratings */}
        <span className="text-gray-500">({course.rating})</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">{`$${course.price}`}</p>
        <Link
          to={`/courses/${course.id}`}
          className="text-blue-500 hover:text-blue-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MnCourseCard;
