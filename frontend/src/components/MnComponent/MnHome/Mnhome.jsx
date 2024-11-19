import React from "react";
import MnFeatureCard from "./MnFeatureCard";
import MnTestimonial from "./MnTestimonial";

const Mnhome = () => {
  return (
    <div className="bg-gray-100 text-white">
      {/* Hero Banner */}
      <div className="relative bg-[url('/path-to-your-image.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">
            Achieve Your Goals with Expert Guidance & Collaborative Challenges!
          </h1>
          <p className="mb-6">
            Discover personalized courses, engaging challenges, and a vibrant
            community.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg">
              Join Now
            </button>
            <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-2 rounded-lg">
              Explore Courses
            </button>
          </div>
        </div>
      </div>

      {/* Quick Search Bar */}
      <div className="bg-white shadow-lg p-6 -mt-12 mx-auto max-w-4xl rounded-lg">
        <input
          type="text"
          placeholder="Find Courses or Challenges"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Features Overview */}
      <div className="max-w-7xl mx-auto p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MnFeatureCard
            title="Learn"
            description="Personalized courses by expert tutors."
            icon="📘"
          />
          <MnFeatureCard
            title="Challenge"
            description="Weekly/monthly challenges for motivation."
            icon="🏆"
          />
          <MnFeatureCard
            title="Connect"
            description="Join a thriving student community."
            icon="🤝"
          />
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-gray-200 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Success Stories
        </h2>
        <div className="max-w-5xl mx-auto space-y-6">
          <MnTestimonial
            name="John Doe"
            quote="This platform has completely transformed my life! The courses are amazing, and the community is incredibly supportive."
            image="/path-to-student1.jpg"
          />
          <MnTestimonial
            name="Jane Smith"
            quote="I love the challenges! They keep me motivated and help me stay on track with my goals."
            image="/path-to-student2.jpg"
          />
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-indigo-600 text-white text-center py-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Manifest Your Dreams?
        </h2>
        <p className="mb-6">
          Join our platform and start your journey to success today.
        </p>
        <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg hover:bg-gray-200">
          Sign Up Now
        </button>
      </div>
    </div>
  );
};

export default Mnhome;
