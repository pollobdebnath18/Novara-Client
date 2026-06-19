"use client";

import React from "react";
import { ClipLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="flex flex-col items-center justify-center gap-4">
        {/* SPINNER */}
        <ClipLoader size={55} color="#7c3aed" />

        {/* TEXT */}
        <h2 className="text-lg font-semibold text-gray-700">
          Loading, please wait...
        </h2>

        {/* SUB TEXT */}
        <p className="text-sm text-gray-400">
          Preparing your ebooks experience
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
