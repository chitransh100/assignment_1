import React from "react";

const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center p-6 rounded-lg shadow-lg bg-gray-800 border border-gray-700 max-w-md">
        {/* Shimmering Text */}
        <h1 className="text-2xl font-bold animate-pulse">🚀 Assignment Placeholder 🚀</h1>
        <p className="mt-4 text-gray-400">
          This page is left <span className="text-yellow-400 font-semibold">intentionally blank</span> as mentioned in the assignment.
        </p>
      </div>
    </div>
  );
};

export default Home;
