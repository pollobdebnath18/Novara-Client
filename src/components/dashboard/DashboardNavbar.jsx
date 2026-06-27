"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link, Button } from "@heroui/react";
import { Menu, X, LogOut, Home, BookOpen } from "lucide-react";

import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import User from "@/image/user.png";

const DashboardNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={18} />,
    },
    {
      name: "Browse Books",
      path: "/books",
      icon: <BookOpen size={18} />,
    },
  ];

  const isActive = (path) => pathname === path;

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/auth/signin");
  };

  return (
    <nav
      className="
      sticky
      top-0
      right-0
      left-20
      md:left-48
      lg:left-64
      z-50
      h-18
      bg-white/90
      backdrop-blur-xl
      border-b
      shadow-sm
      "
    >
      <div
        className="
        h-full
        px-6
        flex
        items-center
        justify-between
        relative
        "
      >
        {/* CENTER NAVIGATION */}

        <div
          className="
          hidden
          md:flex
          absolute
          left-1/2
          -translate-x-1/2
          items-center
          gap-4
          "
        >
          {navLinks.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`
              no-underline
              flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              transition-all


              ${
                isActive(item.path)
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md"
                  : "text-gray-600 hover:bg-purple-50"
              }

              `}
            >
              {item.icon}

              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE USER */}

        <div
          className="
          hidden
          md:flex
          items-center
          gap-4
          ml-auto
          "
        >
          {user && (
            <>
              <div
                className="
              h-10
              w-10
              rounded-full
              overflow-hidden
              border
              shadow
              "
              >
                <Image
                  src={user?.image || User}
                  alt="user"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <Button
                onPress={handleLogout}
                className="
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            text-white
            shadow-md
            "
              >
                <LogOut size={18} />
                Sign Out
              </Button>
            </>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}

        <Button
          isIconOnly
          variant="light"
          className="
        md:hidden
        ml-auto
        "
          onPress={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </Button>
      </div>

      {/* MOBILE MENU */}

      {isOpen && (
        <div
          className="
        md:hidden
        bg-white
        border-t
        shadow-lg
        p-5
        "
        >
          <div
            className="
          flex
          flex-col
          gap-3
          "
          >
            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`

              no-underline

              flex
              items-center
              gap-3

              px-4
              py-3

              rounded-xl


              ${
                isActive(item.path)
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white"
                  : "text-gray-700 hover:bg-purple-50"
              }

              `}
              >
                {item.icon}

                {item.name}
              </Link>
            ))}

            {user && (
              <Button
                onPress={handleLogout}
                className="
            w-full
            mt-3
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            text-white
            "
              >
                <LogOut size={18} />
                Sign Out
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
