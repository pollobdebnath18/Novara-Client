"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button, Input } from "@heroui/react";
import Lottie from "lottie-react";

import SignUpAnimations from "../../../../public/animations/signup_animations.json";
import { FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const [role, setRole] = useState("Reader");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const SignInWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await authClient.signUp.email({
        name,
        email,
        password,
        role: role, // Reader / Writer
      });

      // console.log(res);

      if (res?.error) {
        alert(res.error.message || "Signup failed");
        return;
      }

      if (role === "Reader") {
        router.push("/");
      }
      if (role === "Writer") {
        router.push("/dashboard/writer");
      }
      if (role === "Admin") {
        router.push("/dashboard/admin");
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div className="flex justify-center items-center order-2 md:order-1">
          <div className="w-[350px] md:w-[450px]">
            <Lottie animationData={SignUpAnimations} loop={true} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-1 md:order-2 w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">Create Your Account</h1>
            <p className="text-gray-500 mt-2">
              Join Novara and discover amazing ebooks
            </p>
          </div>

          {/* GOOGLE BUTTON (UI ONLY, NO LOGIC YET) */}
          <Button
            className="w-full h-12 bg-white border border-gray-200 text-gray-700 rounded-xl flex items-center justify-center gap-3"
            onClick={SignInWithGoogle}
          >
            <FaGoogle size={20} />
            Continue with Google
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
              placeholder="Confirm Password"
              variant="bordered"
              required
            />

            {/* ROLE */}
            <div>
              <p className="text-sm font-medium mb-3">Select Account Type</p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole("Reader")}
                  className={`py-3 rounded-xl border ${
                    role === "Reader"
                      ? "bg-purple-500 text-white"
                      : "text-gray-600"
                  }`}
                >
                  Reader
                </button>

                <button
                  type="button"
                  onClick={() => setRole("Writer")}
                  className={`py-3 rounded-xl border ${
                    role === "Writer"
                      ? "bg-purple-500 text-white"
                      : "text-gray-600"
                  }`}
                >
                  Writer
                </button>
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white"
            >
              {loading ? "Creating..." : "Create Account"}
            </Button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?
            <Link href="/auth/signin" className="ml-1 text-purple-600">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
