"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import DashboardNav from "./DashboardNav";
import Image from "next/image";
import User from "@/image/user.png";

export default function MobileSidebar({ navItems, user, role }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
        md:hidden
        fixed
        top-4
        left-4
        z-50
        p-2
        rounded-xl
        bg-white
        shadow-md
        border
        "
      >
        <Menu size={24} />
      </button>

      {/* OVERLAY */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            bg-black/40
            z-40
            md:hidden
            "
        />
      )}

      {/* MOBILE DRAWER */}

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
        md:hidden

        ${open ? "translate-x-0" : "-translate-x-full"}

        `}
      >
        {/* HEADER */}

        <div
          className="
        flex
        items-center
        justify-between
        mb-8
        "
        >
          <div className="flex items-center gap-3">
            <Image
              src={user?.image || User}
              width={40}
              height={40}
              alt="user"
              className="rounded-full"
            />

            <div>
              <h2 className="font-bold">Dashboard</h2>

              <p className="text-xs text-gray-500">{role}</p>
            </div>
          </div>

          <button onClick={() => setOpen(false)}>
            <X size={25} />
          </button>
        </div>

        <DashboardNav navItems={navItems} />
      </aside>
    </>
  );
}
