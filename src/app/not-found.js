"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Home, BookOpen } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-purple-300/30 blur-3xl rounded-full -top-40 -left-40" />
      <div className="absolute w-[400px] h-[400px] bg-pink-300/20 blur-3xl rounded-full bottom-0 right-0" />

      {/* CONTENT */}
      <div className="text-center max-w-lg px-6 z-10">
        {/* 404 BIG TEXT */}
        <h1 className="text-[120px] font-extrabold leading-none bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
          404
        </h1>

        {/* SUB TITLE */}
        <h2 className="text-3xl font-bold text-gray-900 mt-2">
          Oops! Page not found
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mt-4 leading-relaxed">
          The page you’re looking for doesn’t exist, has been moved, or you
          entered the wrong URL. Let’s get you back to something useful.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
          <Link href="/">
            <Button
              startContent={<Home size={18} />}
              className="
                bg-gradient-to-r 
                from-purple-600 
                via-fuchsia-500 
                to-pink-500
                text-white
                px-6
                py-2
                shadow-md
                hover:shadow-xl
                hover:scale-[1.03]
                transition-all
              "
            >
              Go Home
            </Button>
          </Link>

          <Link href="/books">
            <Button
              startContent={<BookOpen size={18} />}
              variant="flat"
              className="px-6 py-2"
            >
              Browse Ebooks
            </Button>
          </Link>
        </div>

        {/* SMALL HELP TEXT */}
        <p className="text-xs text-gray-400 mt-6">
          Error code: 404 • Novara Ebook Platform
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
