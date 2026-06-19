"use client";

import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../image/book_logo.png";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Ebooks", path: "/ebooks" },
    { name: "Dashboard", path: "/dashboard" },
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur-xl">
      <header className="flex h-16 items-center justify-between px-6">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 overflow-hidden rounded-full border shadow-sm">
            <Image
              src={Logo}
              alt="logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>

          <Link href="/" className="no-underline text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              Novara
            </span>
          </Link>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`
                  no-underline
                  px-4 py-2 rounded-full text-sm font-medium transition-all duration-300

                  ${
                    isActive(item.path)
                      ? "bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white shadow-md"
                      : "text-gray-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700"
                  }
                `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/auth/signin" className="no-underline">
            <Button
              variant={pathname === "/auth/signin" ? "solid" : "flat"}
              className={
                pathname === "/auth/signin"
                  ? "bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white shadow-md"
                  : ""
              }
            >
              Sign In
            </Button>
          </Link>

          <Link href="/auth/signup" className="no-underline">
            <Button
              className="
                bg-gradient-to-r 
                from-purple-600 via-fuchsia-500 to-pink-500
                text-white
                shadow-md
                hover:shadow-xl
                hover:scale-[1.03]
                transition-all
                duration-300
                font-medium
              "
            >
              Get Started
            </Button>
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <Button
          isIconOnly
          variant="light"
          className="md:hidden"
          onPress={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </header>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-6 py-5">
          <ul className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
                    no-underline
                    block px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300

                    ${
                      isActive(item.path)
                        ? "bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white"
                        : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700"
                    }
                  `}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li>
              <Link href="/auth/signin" className="no-underline">
                <Button className="w-full" variant="flat">
                  Sign In
                </Button>
              </Link>
            </li>

            <li>
              <Link href="/auth/signup" className="no-underline">
                <Button className="w-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white">
                  Get Started
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
