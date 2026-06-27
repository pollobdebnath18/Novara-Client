"use client";

import React, { useState } from "react";
import { Link, Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../image/book_logo.png";
import BannerImg from "@/image/book_banner.webp";
import User from "@/image/user.png";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const { data: session } = authClient.useSession();

  const user = session?.user;

  // console.log(pathname);
   if (pathname.startsWith("/dashboard/admin")) {
     return null;
   }

   if (pathname.startsWith("/dashboard/writer")) {
     return null;
   }

   if (pathname.startsWith("/dashboard/reader")) {
     return null;
   }

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/auth/signin");
    router.refresh();
  };

  // only logged user
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Browse Ebooks", path: "/books" },

    // only logged user dashboard
    ...(user?.role === "Reader"
      ? [{ name: "Dashboard", path: "/dashboard/reader" }]
      : []),

    ...(user?.role === "Writer"
      ? [{ name: "Dashboard", path: "/dashboard/writer" }]
      : []),

    ...(user?.role === "Admin"
      ? [{ name: "Dashboard", path: "/dashboard/admin" }]
      : []),
  ];

  const isActive = (path) => pathname === path;

  return (
    <nav className="sticky top-0 z-40 w-full border-b bg-white/70 backdrop-blur-xl">
      <header className="flex h-16 items-center justify-between px-6">
        {/* LOGO */}
          <div className="flex items-center gap-3 p-5 border-b">
                  {/* LOGO */}
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
        
                  {/* NAME */}
                  <div>
                    <h2
                      className="
              text-3xl
              font-extrabold
              bg-gradient-to-r
              from-purple-500
              via-fuchsia-400
              to-pink-400
              bg-clip-text
              text-transparent
              "
                    >
                      Novara
                    </h2>
        
                    <p className="text-xs text-gray-500">Digital Ebook Platform</p>
                  </div>
                </div>

        {/* DESKTOP MENU */}

        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`
                  no-underline
                  px-4 py-2 
                  rounded-full 
                  text-sm 
                  font-medium 
                  transition-all duration-300

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

        <div className="flex items-center gap-3">
          {user ? (
            <>
              {/* AVATAR + DROPDOWN */}
              <div className="relative group">
                {/* AVATAR */}
                <div className="cursor-pointer h-10 w-10 rounded-full overflow-hidden border shadow-sm">
                  <Image
                    src={user?.image || User}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>

                {/* DROPDOWN */}
                <div
                  className="
            absolute -right-20 mt-5 w-52
            bg-gray-300 border rounded-xl shadow-lg
            opacity-0 invisible
            group-hover:opacity-100 group-hover:visible
            transition-all duration-200
            z-80
            overflow-hidden
            no-underline
          "
                >
                  <div className="py-2 text-sm text-gray-700">
                    <Link
                      href="/profile"
                      className="block px-3 py-1 hover:bg-purple-100 hover:text-purple-600 no-underline"
                    >
                      Profile
                    </Link>

                    <Link
                      href={
                        user?.role === "Reader"
                          ? "/dashboard/reader"
                          : user?.role === "Writer"
                            ? "/dashboard/writer"
                            : "/dashboard/admin"
                      }
                      className="block px-3 py-1 hover:bg-purple-100 hover:text-purple-600 no-underline"
                    >
                      Dashboard
                    </Link>

                    <Link
                      href="/settings"
                      className="block px-3 py-1 hover:bg-purple-100 hover:text-purple-600 no-underline"
                    >
                      Settings
                    </Link>
                  </div>
                </div>
              </div>

              {/* SIGN OUT BUTTON */}
              <Button
                onPress={handleLogout}
                className="
          bg-gradient-to-r
          from-purple-600
          via-fuchsia-500
          to-pink-500
          text-white
          shadow-md
          hover:scale-[1.03]
          transition
        "
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              {/* NOT LOGGED IN */}
              <Link href="/auth/signin" className="no-underline">
                <Button variant="flat">Sign In</Button>
              </Link>

              <Link href="/auth/signup" className="no-underline">
                <Button
                  className="
            bg-gradient-to-r
            from-purple-600
            via-fuchsia-500
            to-pink-500
            text-white
            shadow-md
            hover:scale-[1.03]
            transition
          "
                >
                  Get Started
                </Button>
              </Link>
            </>
          )}
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
        <div
          className="
        md:hidden
        border-t
        bg-white
        px-6
        py-5
      "
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
        no-underline
        block
        px-4
        py-2
        rounded-lg

        ${
          isActive(item.path)
            ? "bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 text-white"
            : "text-gray-700 hover:bg-purple-50"
        }

        `}
                >
                  {item.name}
                </Link>
              </li>
            ))}

            {user ? (
              <>
                <li>
                  <Button
                    onPress={handleLogout}
                    className="
      w-full
      bg-gradient-to-r
      from-purple-600
      to-pink-500
      text-white
      "
                  >
                    Sign Out
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/auth/signin">
                    <Button className="w-full">Sign In</Button>
                  </Link>
                </li>

                <li>
                  <Link href="/auth/signup">
                    <Button
                      className="
      w-full
      bg-gradient-to-r
      from-purple-600
      to-pink-500
      text-white
      "
                    >
                      Get Started
                    </Button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
