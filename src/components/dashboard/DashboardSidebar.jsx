import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

import DashboardNav from "./DashboardNav";
import Image from "next/image";
import User from "@/image/user.png";
import MobileSidebar from "./MobileSidebar";
import BannerImg from "@/image/book_banner.webp";
import { getUserSession } from "@/lib/core/session";

export async function DashboardSidebar() {
  const user = await getUserSession();
  const role = user?.role;

  // console.log(user);
  //  ICONS as STRING (IMPORTANT FIX)
  const NavWriters = [
    { icon: "House", label: "Home", href: "/dashboard/writer" },
    {
      icon: "Book",
      label: "Manage Ebooks",
      href: "/dashboard/writer/manage-books",
    },
    { icon: "Plus", label: "Add Ebook", href: "/dashboard/writer/add-book" },
    {
      icon: "Bookmark",
      label: "Bookmark Page",
      href: "/dashboard/writer/bookmark",
    },
    {
      icon: "ChartColumn",
      label: "Sales History",
      href: "/dashboard/writer/sales-history",
    },
    { icon: "Person", label: "Profile", href: "/dashboard/writer/my-profile" },
  ];

  const NavReaders = [
    { icon: "House", label: "Home", href: "/dashboard/reader" },
    {
      icon: "Book",
      label: "Purchased Ebooks",
      href: "/dashboard/reader/books",
    },
    {
      icon: "Bell",
      label: "Purchase History",
      href: "/dashboard/reader/history",
    },
    {
      icon: "Bookmark",
      label: "Bookmarks",
      href: "/dashboard/reader/bookmark",
    },
    {
      icon: "Person",
      label: "My Profile",
      href: "/dashboard/reader/my-profile",
    },
  ];

  const NavAdmin = [
    {
      icon: "House",
      label: "Home",
      href: "/dashboard/admin",
    },
    {
      icon: "Person",
      label: "Manage Users",
      href: "/dashboard/admin/manage-users",
    },
    {
      icon: "Book",
      label: "Manage All Ebooks",
      href: "/dashboard/admin/ebooks",
    },
    {
      icon: "ChartColumn",
      label: "View All Transactions",
      href: "/dashboard/admin/transactions",
    },
    {
      icon: "Person",
      label: "My Profile",
      href: "/dashboard/admin/my-profile",
    },
  ];

  const menus = {
    Writer: NavWriters,
    Reader: NavReaders,
    Admin: NavAdmin,
  };

  const navItems = menus[role] || NavReaders;

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className="
  min-h-screen
  hidden
  md:flex
  md:w-48
  lg:w-64
  flex-col
  border-r
  bg-background
    "
      >
        {/* profile 
        
        */}
        <div className="flex items-center gap-3 p-1.5 border-b">
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

        <div className="p-3">
          <DashboardNav navItems={navItems} />
        </div>

        {/* profile */}
        <div className="mt-48 flex items-center gap-2 p-5 border-t">
          <div className="h-10 w-10 rounded-full overflow-hidden border">
            <Link href={`/dashboard/${role.toLowerCase()}/my-profile`}>
              <Image
                src={user?.image || User}
                alt="avatar"
                width={40}
                height={40}
                className="object-cover cursor-pointer"
              />
            </Link>
          </div>

          <div>
            <h2 className="font-bold">Dashboard</h2>

            <p className="text-xs text-gray-500">{user?.role}</p>
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {/* <MobileSidebar navItems={navItems} user={user} role={role} /> */}
    </>
  );
}
