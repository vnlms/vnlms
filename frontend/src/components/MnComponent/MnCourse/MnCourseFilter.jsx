// src/components/CourseFilters.jsx
import React from "react";

const MnCourseFilters = ({ categories, onCategoryChange, onSortChange }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Filter Courses</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="category" className="block text-gray-700">Category</label>
          <select
            id="category"
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sort" className="block text-gray-700">Sort by</label>
          <select
            id="sort"
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
            <option value="ratings">Ratings</option>
            <option value="newest">Recently Added</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default MnCourseFilters;
