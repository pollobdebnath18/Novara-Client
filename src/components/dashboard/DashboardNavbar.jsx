"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Link, Button } from "@heroui/react";
import { Menu, X, LogOut, Home, BookOpen, LayoutDashboard } from "lucide-react";

import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

import User from "@/image/user.png";

const DashboardNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const role = user?.role;

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

  const NavWriters = [
    {
      label: "Home",
      href: "/dashboard/writer",
    },
    {
      label: "Manage Ebooks",
      href: "/dashboard/writer/manage-books",
    },
    {
      label: "Add Ebook",
      href: "/dashboard/writer/add-book",
    },
    {
      label: "Bookmark Page",
      href: "/dashboard/writer/bookmark",
    },
    {
      label: "Sales History",
      href: "/dashboard/writer/sales-history",
    },
    {
      label: "Profile",
      href: "/dashboard/writer/my-profile",
    },
  ];

  const NavReaders = [
    {
      label: "Home",
      href: "/dashboard/reader",
    },
    {
      label: "Purchased Ebooks",
      href: "/dashboard/reader/books",
    },
    {
      label: "Purchase History",
      href: "/dashboard/reader/history",
    },
    {
      label: "Bookmarks",
      href: "/dashboard/reader/bookmark",
    },
    {
      label: "My Profile",
      href: "/dashboard/reader/my-profile",
    },
  ];

  const NavAdmin = [
    {
      label: "Home",
      href: "/dashboard/admin",
    },
    {
      label: "Manage Users",
      href: "/dashboard/admin/manage-users",
    },
    {
      label: "Manage Ebooks",
      href: "/dashboard/admin/ebooks",
    },
    {
      label: "Transactions",
      href: "/dashboard/admin/transactions",
    },
    {
      label: "My Profile",
      href: "/dashboard/admin/my-profile",
    },
  ];

  const menus = {
    Writer: NavWriters,
    Reader: NavReaders,
    Admin: NavAdmin,
  };

  const dashboardItems = menus[role] || NavReaders;

  // MOBILE MENU ITEMS

  const mobileNavItems = [
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

    {
      name: "Dashboard Home",
      path:
        role === "Writer"
          ? "/dashboard/writer"
          : role === "Admin"
            ? "/dashboard/admin"
            : "/dashboard/reader",

      icon: <LayoutDashboard size={18} />,
    },

    ...dashboardItems
      .filter((item) => item.label !== "Home")
      .map((item) => ({
        name: item.label,
        path: item.href,
        icon: null,
      })),
  ];

  const isActive = (path) => pathname === path;

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/auth/signin");

    router.refresh();
  };

  return (
    <nav
      className="
sticky
top-0
z-50
bg-white/90
backdrop-blur
border-b
shadow-sm
md:left-48
lg:left-64
"
    >
      <div
        className="
h-16
px-6
flex
items-center
justify-between
"
      >
        {/* DESKTOP MENU */}

        <div
          className="
hidden
md:flex
absolute
left-1/2
-translate-x-1/2
gap-3
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
rounded-xl
text-sm
font-medium
transition


${
  isActive(item.path)
    ? "bg-purple-600 text-white shadow"
    : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
}

`}
            >
              {item.icon}

              {item.name}
            </Link>
          ))}
        </div>

        {/* USER */}

        <div
          className="
hidden
md:flex
items-center
gap-4
ml-auto
"
        >
          <Image
            src={user?.image || User}
            alt="user"
            width={40}
            height={40}
            className="
w-10
h-10
rounded-full
object-cover
border
"
          />

          <Button
            onPress={handleLogout}
            className="
bg-red-50
text-red-600
border
border-red-200
hover:bg-red-100
"
          >
            <LogOut size={18} />
            Sign Out
          </Button>
        </div>

        {/* MOBILE BUTTON */}

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
shadow-md
px-5
py-5
"
        >
          <div
            className="
flex
flex-col
gap-3
"
          >
            {mobileNavItems.map((item) => (
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
text-sm
font-medium
transition


${
  isActive(item.path)
    ? "bg-purple-600 text-white"
    : "bg-gray-50 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
}

`}
              >
                {item.icon}

                {item.name}
              </Link>
            ))}

            <Button
              onPress={handleLogout}
              className="
mt-2
w-full
bg-red-50
text-red-600
border
border-red-200
hover:bg-red-100
"
            >
              <LogOut size={18} />
              Sign Out
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardNavbar;
