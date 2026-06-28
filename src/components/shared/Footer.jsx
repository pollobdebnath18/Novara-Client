"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import Logo from "../../image/book_logo.png";
import BannerImg from "@/image/book_banner.webp";

import { LogoFacebook, LogoGithub } from "@gravity-ui/icons";
import { usePathname } from "next/navigation";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();
   if (pathname.startsWith("/dashboard/admin")) {
     return null;
   }

   if (pathname.startsWith("/dashboard/writer")) {
     return null;
   }

   if (pathname.startsWith("/dashboard/reader")) {
     return null;
   }
   
  return (
    <footer className="w-full bg-black text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LEFT - LOGO */}
          <div>
            <div className="flex items-center gap-3">
              <div
                className="
                         h-10
                         w-10
                         rounded-full
                         overflow-hidden
                         bg-gradient-to-br
                         from-purple-600
                         via-fuchsia-500
                         to-pink-500
                         p-[2px]
                         shadow-lg
                         "
              >
                <div className="h-full w-full rounded-full bg-white overflow-hidden">
                  <Image
                    src={BannerImg}
                    alt="Novara logo"
                    width={48}
                    height={48}
                    className="
                             h-full
                             w-full
                             object-cover
                             scale-125
                             "
                  />
                </div>
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
            <div className="flex gap-4 mt-5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                className="
    w-7
    h-7
    rounded-full
    flex
    items-center
    justify-center
    bg-blue-50
    text-blue-600
    hover:bg-blue-600
    hover:text-white
    hover:-translate-y-1
    transition
    duration-300
    shadow-sm
    "
              >
                <FaFacebookF size={18} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                className="
    w-7
    h-7
    rounded-full
    flex
    items-center
    justify-center
    bg-pink-50
    text-pink-500
    hover:bg-pink-500
    hover:text-white
    hover:-translate-y-1
    transition
    duration-300
    shadow-sm
    "
              >
                <FaInstagram size={18} />
              </a>

              {/* Twitter */}
              <a
                href="https://www.twitter.com"
                className="
    w-7
    h-7
    rounded-full
    flex
    items-center
    justify-center
    bg-sky-50
    text-sky-500
    hover:bg-sky-500
    hover:text-white
    hover:-translate-y-1
    transition
    duration-300
    shadow-sm
    "
              >
                <FaTwitter size={18} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                className="
    w-7
    h-7
    rounded-full
    flex
    items-center
    justify-center
    bg-gray-50
    text-blue-700
    hover:bg-blue-700
    hover:text-white
    hover:-translate-y-1
    transition
    duration-300
    shadow-sm
    "
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { name: "Home", path: "/" },
                { name: "Browse Ebooks", path: "/books" },
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
            A modern platform for discovering and sharing ebooks.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
