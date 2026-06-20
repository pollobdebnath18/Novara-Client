import { auth } from "@/lib/auth";
import { useSession } from "@/lib/auth-client";
import {
  House,
  Magnifier,
  Bell,
  Envelope,
  Gear,
  Person,
  Book,
  Pencil,
  Bookmark,
  ChartColumn,
  Plus,
  Bars,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";

export async function DashboardSidebar() {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });
  const user = session?.user;
  const role = user?.role;
  // console.log(user,"user role: ", role);

  const NavWriters = [
    { icon: House, label: "Home", href: "/dashboard/writer" },
    { icon: Book, label: "Manage Ebooks", href: "/dashboard/writer/manage-books" },
    { icon: Plus, label: "Add Ebook", href: "/dashboard/writer/add-book" },
    // { icon: Pencil, label: "Edit Ebook", href: "/dashboard/writer/edit-book" },
    {
      icon: Bookmark,
      label: "Bookmark Page",
      href: "/dashboard/writerookmark",
    },
    {
      icon: ChartColumn,
      label: "Sales History",
      href: "/dashboard/writ/sales",
    },
    { icon: Person, label: "Profile", href: "/profile" },
  ];
  const NavReaders = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];
  const NavAdmin = [
    { icon: House, label: "Home" },
    { icon: Magnifier, label: "Search" },
    { icon: Bell, label: "Notifications" },
    { icon: Envelope, label: "Messages" },
    { icon: Person, label: "Profile" },
    { icon: Gear, label: "Settings" },
  ];
  const menus = {
    Writer: NavWriters,
    Reader: NavReaders,
    Admin: NavAdmin,
  };

  const navItems = menus[role] || NavWriters;

  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link
          href={item.href}
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>
  );

  return (
    <>
      <aside className="hidden lg:block lg:w-72 lg:shrink-0 lg:border-r lg:border-default lg:bg-background">
        {navContent}
      </aside>
      <Drawer>
        <Button className="lg:hidden" variant="secondary">
          <Bars />
          Menu
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
    </>
  );
}
