import React from "react";
import { Lock } from "lucide-react";
import Link from "next/link";

const UnAuthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-200 p-6">
      <div className="text-center max-w-md bg-white shadow-lg rounded-2xl p-10 border">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-red-100 rounded-full">
            <Lock size={40} className="text-red-500" />
          </div>
        </div>

        {/* Code */}
        <h1 className="text-6xl font-extrabold text-red-500">403</h1>

        {/* Heading */}
        <h2 className="text-2xl font-bold mt-3">Access Denied</h2>

        {/* Description */}
        <p className="text-gray-500 mt-2">
          You don’t have permission to access this page. Please login with a
          valid account to continue.
        </p>

        {/* Button */}
        <Link
          href="/auth/signin"
          className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition font-medium"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
};

export default UnAuthorizedPage;
