"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import DashboardNav from "./DashboardNav";

export default function MobileSidebar({ navItems, user, role }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="
        lg:hidden
        fixed
        top-4
        left-4
        z-50
        p-2
        rounded-lg
        bg-white
        shadow
        border
        "
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
          fixed
          inset-0
          bg-black/40
          z-40
          lg:hidden
          "
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed
        top-0
        left-0
        h-screen
        w-72
        bg-white
        z-50
        border-r
        p-5
        transition-transform
        duration-300

        ${open ? "translate-x-0" : "-translate-x-full"}

        lg:hidden
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="font-bold text-xl">Dashboard</h2>

            <p className="text-sm text-gray-500">{role}</p>
          </div>

          <button onClick={() => setOpen(false)}>
            <X size={25} />
          </button>
        </div>

        {/* Menu */}
        <DashboardNav navItems={navItems} />
      </aside>
    </>
  );
}
