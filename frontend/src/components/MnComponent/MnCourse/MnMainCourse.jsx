// src/pages/Courses.jsx
import React, { useState } from "react";
import MnCourseCard from "./MnCourseCard";
import MnCourseFilters from "./MnCourseFilter";

const MnMainCourse = () => {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");

  const courses = [
    {
      id: 1,
      thumbnail: "https://via.placeholder.com/300",
      name: "Manifestation Mastery",
      tutorName: "John Doe",
      rating: 4.5,
      price: 99.99,
    },
    {
      id: 2,
      thumbnail: "https://via.placeholder.com/300",
      name: "Personal Growth 101",
      tutorName: "Jane Smith",
      rating: 4.7,
      price: 79.99,
    },
    {
      id: 3,
      thumbnail: "https://via.placeholder.com/300",
      name: "Life Skills for Success",
      tutorName: "Alice Johnson",
      rating: 4.8,
      price: 89.99,
    },
  ];

  const categories = ["All", "Manifestation", "Academics", "Personal Growth", "Life Skills"];

  const filteredCourses = courses.filter((course) =>
    category === "All" ? true : course.name.includes(category)
  );

  // Sort courses by selected option
  const sortedCourses = filteredCourses.sort((a, b) => {
    if (sortBy === "price") {
      return a.price - b.price;
    } else if (sortBy === "ratings") {
      return b.rating - a.rating;
    } else if (sortBy === "newest") {
      return 0; // Add actual sorting by date when applicable
    }
    return 0; // Default sorting by popularity
  });

  return (
    <div className="container mx-auto p-6">
      <MnCourseFilters
        categories={categories}
        onCategoryChange={setCategory}
        onSortChange={setSortBy}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedCourses.map((course) => (
          <MnCourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default MnMainCourse;
