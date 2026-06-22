import ManageAllUsersTable from "@/components/admin/ManageAllUsersTable";
import { getAllUsers } from "@/lib/core/session";
import { Users, ShieldCheck, PenTool, UserRound } from "lucide-react";

export default async function AdminManageUsersPage() {
  const users = await getAllUsers();

  const stats = [
    {
      title: "Total Users",
      value: users.length,
      icon: Users,
      bg: "bg-blue-500",
    },
    {
      title: "Admins",
      value: users.filter((u) => u.role === "Admin").length,
      icon: ShieldCheck,
      bg: "bg-red-500",
    },
    {
      title: "Writers",
      value: users.filter((u) => u.role === "Writer").length,
      icon: PenTool,
      bg: "bg-purple-500",
    },
    {
      title: "Readers",
      value: users.filter((u) => u.role === "Reader").length,
      icon: UserRound,
      bg: "bg-green-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div
        className="
        rounded-3xl 
        bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600
        text-white 
        p-8 
        shadow-lg
      "
      >
        <h1 className="text-3xl font-bold">Manage Users</h1>

        <p className="mt-2 text-white/80">
          Control users, roles, permissions and access.
        </p>
      </div>

      {/* STATS */}
      <div
        className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-4 
        gap-5
      "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                bg-white
                dark:bg-gray-900
                p-5
                shadow-sm
                flex
                justify-between
                items-center
              "
            >
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>

                <h2 className="text-3xl font-bold mt-2">{item.value}</h2>
              </div>

              <div
                className={`
                  ${item.bg}
                  h-12
                  w-12
                  rounded-xl
                  flex
                  items-center
                  justify-center
                  text-white
                `}
              >
                <Icon size={24} />
              </div>
            </div>
          );
        })}
      </div>

      {/* TABLE CARD */}
      <div
        className="
          rounded-3xl
          border
          bg-white
          dark:bg-gray-900
          shadow-sm
          overflow-hidden
        "
      >
        <div className="p-6 border-b">
          <h2 className="text-xl font-semibold">All Users</h2>

          <p className="text-sm text-gray-500 mt-1">
            Update roles, manage accounts and control access.
          </p>
        </div>

        <div className="p-5">
          <ManageAllUsersTable users={users} />
        </div>
      </div>
    </div>
  );
}
