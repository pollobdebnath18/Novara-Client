"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import Logo from "../../image/book_logo.png";
import { LogoFacebook, LogoGithub } from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LEFT - LOGO */}
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full overflow-hidden border border-white/20 shadow-sm">
                <Image
                  src={Logo}
                  alt="logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>

              <h2 className="text-xl font-bold">
                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                  Novara
                </span>
              </h2>
            </div>

            <p className="mt-4 text-gray-400 text-sm">
              Discover and read amazing ebooks from talented writers around the
              world.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3 mt-5 text-gray-400">
              <LogoFacebook className="w-5 h-5 cursor-pointer hover:text-purple-400 transition" />
              <LogoGithub className="w-5 h-5 cursor-pointer hover:text-purple-400 transition" />
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { name: "Home", path: "/" },
                { name: "Browse Ebooks", path: "/ebooks" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
                { name: "Privacy Policy", path: "/privacy" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className="hover:text-white transition no-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Newsletter</h3>

            <p className="text-sm text-gray-400 mb-4">
              Subscribe to get latest ebook updates and writer stories.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  w-full sm:w-auto flex-1
                  px-4 py-2
                  rounded-lg
                  bg-white/5
                  border border-white/10
                  text-white
                  placeholder-gray-500
                  focus:outline-none
                  focus:ring-2 focus:ring-purple-500
                "
              />

              <Button className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Novara. All rights reserved.</p>

          <p className="mt-2 md:mt-0 text-gray-400">
            Built with ❤️ for ebook lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
