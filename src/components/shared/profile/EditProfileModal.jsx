"use client";

import Image from "next/image";
import User from "@/image/user.png";
import { useState } from "react";
import { updateProfile } from "@/lib/actions/profile";

export default function EditProfileModal({ user }) {
  const id = user?.id;
  // console.log(id);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
    role: user.role || "Reader",
    image: user.image || "",
  });

  const handleUpdate = async () => {
    const res = await updateProfile(id, form, "PATCH");

   


    if (res.success) {
     window.location.reload();
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
        px-4 py-2 rounded-lg
        bg-purple-600 text-white
        hover:bg-purple-700 cursor-pointer
        "
      >
        Edit Profile
      </button>

      {open && (
        <div
          className="
          fixed inset-0 
          bg-black/40
          flex items-center justify-center
          z-50
          "
        >
          <div
            className="
            bg-white
            rounded-2xl
            p-6
            w-[400px]
            shadow-xl
            "
          >
            <div className="flex items-center gap-5 mb-6">
              {/* Profile Image */}
              <div
                className="
    h-20
    w-20
    rounded-full
    overflow-hidden
    border
    shadow-md
    flex-shrink-0
    "
              >
                <Image
                  src={user.image || User}
                  alt="profile"
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text */}
              <div>
                <h2 className="text-2xl font-bold">Update Your Profile</h2>

                <p className="text-sm text-gray-500 mt-1">
                  Manage your account information and update your personal
                  details.
                </p>
              </div>
            </div>

            {/* Name */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Name
              </label>

              <input
                className="
    border
    p-3
    rounded-lg
    w-full
    focus:outline-none
    focus:ring-2
    focus:ring-purple-500
    "
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
              />
            </div>

            {/* Email */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Email
              </label>

              <input
                className="
    border
    p-3
    rounded-lg
    w-full
    bg-gray-100
    text-gray-500
    "
                value={form.email}
                disabled
              />
            </div>

            {/* Image */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-600 mb-2">
                Profile Image URL
              </label>

              <input
                className="
    border
    p-3
    rounded-lg
    w-full
    focus:outline-none
    focus:ring-2
    focus:ring-purple-500
    "
                value={form.image}
                onChange={(e) =>
                  setForm({
                    ...form,
                    image: e.target.value,
                  })
                }
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="
                px-4 py-2
                border
                rounded-lg
                "
              >
                Cancel
              </button>

              <button
                onClick={handleUpdate}
                className="
                px-4 py-2
                bg-purple-600
                text-white
                rounded-lg
                "
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
