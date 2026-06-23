import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

import DashboardNav from "./DashboardNav";
import Image from "next/image";
import User from "@/image/user.png";


export async function DashboardSidebar() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;
  const role = session?.user?.role;

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
      href: "/dashboard/writer/sales",
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
    { icon: "Person", label: "My Profile", href: "/dashboard/reader/my-profile" },
  ];

  const NavAdmin = [
    { icon: "House", label: "Home", href: "/dashboard/admin" },
    {
      icon: "Magnifier",
      label: "Manage Users",
      href: "/dashboard/admin/manage-users",
    },
    {
      icon: "Bell",
      label: "Manage All Ebooks",
      href: "/dashboard/admin/ebooks",
    },
    {
      icon: "Gear",
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
    <aside className="hidden lg:flex lg:w-72 lg:flex-col lg:border-r lg:bg-background">
      {/* Header */}
      <div className="flex items-center gap-2 ml-3">
        <div className="cursor-pointer h-10 w-10 rounded-full overflow-hidden border shadow-sm">
          <Image
            src={user?.image || User}
            alt="avatar"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <div className="p-5 border-b">
          <h2 className="text-lg font-bold">Dashboard</h2>
          <p className="text-xs text-gray-700">{role}</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-3">
        <DashboardNav navItems={navItems} />
      </div>
    </aside>
  );
}
