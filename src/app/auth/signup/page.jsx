"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Input } from "@heroui/react";
import { GlobeOffIcon } from "lucide-react";
import Lottie from "lottie-react";

import SignUpAnimations from "../../../../public/animations/signup_animations.json";
import { FaGoogle } from "react-icons/fa";

const SignUpPage = () => {
  const [role, setRole] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
      role,
    };

    console.log(formData);
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-gradient-to-br
      from-purple-50
      via-white
      to-pink-50
      px-6
    "
    >
      <div
        className="
        max-w-6xl
        w-full
        grid
        grid-cols-1
        md:grid-cols-2
        gap-12
        items-center
      "
      >
        {/* LEFT SIDE ANIMATION */}

        <div
          className="
          flex
          justify-center
          items-center
          order-2
          md:order-1
        "
        >
          <div className="w-[350px] md:w-[450px]">
            <Lottie animationData={SignUpAnimations} loop={true} />
          </div>
        </div>

        {/* RIGHT SIDE SIGNUP */}

        <div
          className="
          order-1
          md:order-2
          w-full
          max-w-md
          mx-auto
          bg-white
          rounded-2xl
          shadow-xl
          p-8
          border
        "
        >
          {/* HEADER */}

          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Create Your Account</h1>

            <p className="text-gray-500 mt-2">
              Join Novara and discover amazing ebooks
            </p>
          </div>

          {/* GOOGLE LOGIN */}

          <Button
            className="
    group
    w-full
    h-12
    bg-white
    border
    border-gray-200
    text-gray-700
    font-medium
    rounded-xl
    shadow-sm
    hover:shadow-md
    hover:border-purple-300
    hover:bg-gradient-to-r
    hover:from-purple-50
    hover:to-pink-50
    transition-all
    duration-300
    flex
    items-center
    justify-center
    gap-3
  "
          >
            <FaGoogle
              size={20}
              className="
      transition-transform
      duration-300
      group-hover:scale-110
    "
            />

            <span>Continue with Google</span>
          </Button>

          <div className="flex items-center gap-3 my-5">
            <div className="h-px bg-gray-200 flex-1" />

            <span className="text-sm text-gray-400">OR</span>

            <div className="h-px bg-gray-200 flex-1" />
          </div>

          {/* FORM */}

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              name="name"
              label="Full Name"
              placeholder="Enter Your Name"
              variant="bordered"
              required
            />

            <Input
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your Email"
              variant="bordered"
              required
              className={"pl-5"}
            />

            <Input
              name="password"
              label="Password"
              type="password"
              placeholder="Enter Your Password"
              variant="bordered"
              required
            />

            <Input
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirme Password"
              variant="bordered"
              required
            />

            {/* ROLE */}

            <div>
              <p className="text-sm font-medium mb-3">Select Account Type</p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("user")}
                  className={`
                    py-3 rounded-xl border transition
                    ${
                      role === "user"
                        ? "bg-gradient-to-r from-purple-400 to-pink-500 text-white"
                        : "text-gray-600"
                    }
                  `}
                >
                  Reader
                </button>

                <button
                  type="button"
                  onClick={() => setRole("writer")}
                  className={`
                    py-3 rounded-xl border transition
                    ${
                      role === "writer"
                        ? "bg-gradient-to-r from-purple-400 to-pink-500 text-white"
                        : "text-gray-600"
                    }
                  `}
                >
                  Writer
                </button>
              </div>
            </div>

            <Button
              type="submit"
              className="
                w-full
                bg-gradient-to-r
                from-purple-600
                via-fuchsia-500
                to-pink-500
                text-white
                font-semibold
                shadow-md
                hover:shadow-xl
                transition
              "
            >
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?
            <Link
              href="/auth/signin"
              className="
                ml-1
                text-purple-600
                font-semibold
                no-underline
              "
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
