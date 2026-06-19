"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input, Button } from "@heroui/react";
import { FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const SignInWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      setLoading(true);

      const res = await authClient.signIn.email({
        email,
        password,
      });

      console.log(res);

      if (res?.error) {
        alert(res.error.message || "Signin failed");
        return;
      }

      alert("Successfully signin");

      // optional
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-6">
      {/* CARD */}
      <div className="w-full max-w-md bg-white border shadow-xl rounded-2xl p-8">
        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Welcome Back</h1>

          <p className="text-gray-500 mt-2">
            Sign in to continue reading ebooks
          </p>
        </div>

        {/* GOOGLE LOGIN */}
        <Button
          onClick={SignInWithGoogle}
          className="
            group
            w-full
            h-12
            bg-white
            border
            border-gray-200
            text-gray-700
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
          <FaGoogle size={18} className="group-hover:scale-110 transition" />
          Continue with Google
        </Button>

        {/* DIVIDER */}
        <div className="flex items-center gap-3 my-6">
          <div className="h-px bg-gray-200 flex-1" />
          <span className="text-sm text-gray-400">OR</span>
          <div className="h-px bg-gray-200 flex-1" />
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="flex flex-col gap-5">
            {/* EMAIL */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Email</label>

              <Input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                variant="bordered"
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <Input
                name="password"
                type="password"
                placeholder="Enter Your Password"
                variant="bordered"
                required
              />
            </div>
          </div>
          {/* BUTTON */}
          <Button
            type="submit"
            className="
              w-full
              h-12
              bg-gradient-to-r
              from-purple-600
              via-fuchsia-500
              to-pink-500
              text-white
              font-semibold
              rounded-xl
              shadow-md
              hover:shadow-xl
              hover:scale-[1.02]
              transition-all
            "
          >
            Sign In
          </Button>
        </form>

        {/* FOOTER */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?
          <Link
            href="/auth/signup"
            className="ml-1 text-purple-600 font-semibold no-underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
