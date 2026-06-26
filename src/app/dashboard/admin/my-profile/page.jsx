import React from "react";
import Image from "next/image";
import { auth } from "@/lib/auth"; // server-side auth
import { headers } from "next/headers";
import User from "@/image/user.png";
import { getUserSession } from "@/lib/core/session";

const MyProfilePage = async () => {

  const user = await getUserSession();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-xl font-semibold text-gray-500">
          You are not logged in
        </h1>
      </div>
    );
  }

  return (
    <div className="pt-12 bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center px-6">
      <div className="w-full max-w-2xl bg-white border rounded-2xl shadow-xl p-8">
        {/* HEADER */}
        <div className="flex items-center gap-5">
          {/* IMAGE */}
          <div className="h-20 w-20 rounded-full overflow-hidden border shadow-md">
            <Image
              src={user.image || User}
              alt="profile"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>

          {/* BASIC INFO */}
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>

            {/* ROLE BADGE */}
            <span
              className="
              inline-block mt-2 px-3 py-1 text-sm rounded-full
              bg-purple-100 text-purple-700 font-medium
            "
            >
              {user.role || "Reader"}
            </span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-6 border-t" />

        {/* DETAILS SECTION */}
        <div className="space-y-4 text-sm text-gray-700">
          <div className="flex justify-between">
            <span className="text-gray-500">User ID</span>
            <span>{user.id}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Email Verified</span>
            <span>{user.emailVerified ? "Yes" : "No"}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Account Role</span>
            <span className="font-medium text-purple-600">{user.role}</span>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="mt-8 flex gap-3">
          <button
            className="
            px-4 py-2 rounded-lg
            bg-purple-600 text-white
            hover:bg-purple-700
            transition
          "
          >
            Edit Profile
          </button>

          <button
            className="
            px-4 py-2 rounded-lg
            border
            hover:bg-gray-50
            transition
          "
          >
            Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
