"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  House,
  Magnifier,
  Bell,
  Envelope,
  Gear,
  Person,
  Book,
  Bookmark,
  ChartColumn,
  Plus,
} from "@gravity-ui/icons";

const icons = {
  House,
  Magnifier,
  Bell,
  Envelope,
  Gear,
  Person,
  Book,
  Bookmark,
  ChartColumn,
  Plus,
};

export default function DashboardNav({ navItems }) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {navItems.map((item) => {
        const Icon = icons[item.icon];

        const active = pathname === item.href;

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`
              flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition

              ${
                active
                  ? "bg-purple-400 text-white shadow"
                  : "hover:bg-default text-foreground"
              }

              `}
          >
            <Icon
              className={`
                size-5
                ${active ? "text-white" : "text-muted"}
                `}
            />

            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
