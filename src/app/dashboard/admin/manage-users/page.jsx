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
      {/* HEADER */}
      <div
        className="
  rounded-3xl
  bg-gradient-to-r
  from-indigo-600
  via-purple-600
  to-pink-500
  text-white
  p-8
  shadow-xl
  relative
  overflow-hidden
  "
      >
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Manage Users 👥
          </h1>

          <p className="mt-3 text-white/80 max-w-xl">
            Manage user accounts, assign roles, control permissions, and
            maintain platform access securely.
          </p>

          <div
            className="
      mt-5
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-full
      bg-white/20
      backdrop-blur
      text-sm
      "
          >
            🔐 User & Role Management
          </div>
        </div>

        <div
          className="
    absolute
    -right-10
    -bottom-10
    w-40
    h-40
    rounded-full
    bg-white/10
    "
        />
      </div>

      {/* STATS */}
      <div
        className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4
  gap-6
  "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
        group
        bg-white
        border
        rounded-3xl
        p-6
        shadow-sm
        hover:shadow-xl
        hover:-translate-y-1
        transition-all
        duration-300
        flex
        items-center
        justify-between
        "
            >
              <div>
                <p className="text-sm text-gray-500 font-medium">
                  {item.title}
                </p>

                <h2
                  className="
            text-4xl
            font-extrabold
            text-gray-800
            mt-2
            "
                >
                  {item.value}
                </h2>

                <p className="text-xs text-gray-400 mt-2">Updated statistics</p>
              </div>

              <div
                className={`
          ${item.bg}
          w-14
          h-14
          rounded-2xl
          flex
          items-center
          justify-center
          text-white
          shadow-md
          group-hover:scale-110
          transition
          duration-300
          `}
              >
                <Icon width={26} height={26} />
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
        <div
          className="
  p-6
  border-b
  bg-gradient-to-r
  from-gray-50
  via-white
  to-purple-50
  "
        >
          <div className="flex items-center gap-3">
            <div
              className="
      w-12
      h-12
      rounded-2xl
      bg-purple-100
      flex
      items-center
      justify-center
      "
            >
              👥
            </div>

            <div>
              <h2
                className="
        text-xl
        md:text-2xl
        font-bold
        text-gray-800
        "
              >
                All Users
              </h2>

              <p
                className="
        text-sm
        text-gray-500
        mt-1
        "
              >
                Manage accounts, update roles, and control user permissions.
              </p>
            </div>
          </div>

          <div
            className="
    mt-5
    inline-flex
    items-center
    gap-2
    px-4
    py-2
    rounded-full
    bg-white
    border
    text-sm
    text-gray-600
    shadow-sm
    "
          >
            🔐 Secure user management panel
          </div>
        </div>

        <div className="p-5">
          <ManageAllUsersTable users={users} />
        </div>
      </div>
    </div>
  );
}
