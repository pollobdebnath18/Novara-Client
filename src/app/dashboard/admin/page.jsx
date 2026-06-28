import AdminOverviewCharts from "@/components/admin/AdminOverviewCharts";
import { getAllBooks, getTransactions } from "@/lib/api/admin";
import { getAllUsers } from "@/lib/core/session";
import {
  Users,
  PenTool,
  BookOpen,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

export default async function AdminHomePage() {
   const users = await getAllUsers();
   const transactions = await getTransactions();
   const books = await getAllBooks();

   const overview = {
     totalUsers: users.length,

     totalWriters: users.filter((user) => user.role === "Writer").length,
     totalReaders: users.filter((user) => user.role === "Reader").length,

     totalBooksSold: books.filter((book) => book.isSold === true).length,

     totalRevenue: transactions.reduce(
       (total, item) => total + Number(item.priceId || 0),
       0,
     ),
   };


  const stats = [
    {
      title: "Total Users",
      value: overview.totalUsers,
      icon: <Users size={24} />,
      color: "from-purple-500 to-indigo-500",
    },

    {
      title: "Total Writers",
      value: overview.totalWriters,
      icon: <PenTool size={24} />,
      color: "from-pink-500 to-rose-500",
    },

    {
      title: "Total Readers",
      value: overview.totalReaders,
      icon: <BookOpen size={24} />,
      color: "from-blue-500 to-cyan-500",
    },

    {
      title: "Revenue",
      value: `৳ ${overview.totalRevenue}`,
      icon: <DollarSign size={24} />,
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div
      className="
      space-y-8
      "
    >
      {/* MAIN WRAPPER */}

      <div
        className="
        rounded-3xl
        border
        bg-white
        shadow-sm
        p-5
        md:p-8
        "
      >
        {/* HERO */}

        <section
          className="
  relative
  overflow-hidden
  rounded-3xl
  bg-gradient-to-br
  from-slate-900
  via-slate-800
  to-blue-900
  p-7
  md:p-10
  text-white
  shadow-xl
  "
        >
          {/* Soft Glow */}

          <div
            className="
    absolute
    -top-24
    -right-24
    w-80
    h-80
    rounded-full
    bg-blue-500/20
    blur-3xl
    "
          />

          <div
            className="
    absolute
    -bottom-24
    -left-24
    w-80
    h-80
    rounded-full
    bg-cyan-400/10
    blur-3xl
    "
          />

          <div className="relative z-10">
            {/* Badge */}

            <div
              className="
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-full
      bg-white/10
      border
      border-white/20
      backdrop-blur-md
      text-sm
      text-gray-200
      "
            >
              <ShieldCheck size={16} />
              Admin Control Panel
            </div>

            <h1
              className="
      mt-6
      text-4xl
      md:text-6xl
      font-extrabold
      tracking-tight
      "
            >
              Admin Dashboard
            </h1>

            <p
              className="
      mt-4
      max-w-2xl
      text-gray-300
      text-base
      md:text-lg
      leading-relaxed
      "
            >
              Manage users, monitor ebooks, analyze sales, and control your
              entire Novara platform from one place.
            </p>

            <div
              className="
      mt-7
      flex
      flex-wrap
      gap-3
      "
            >
              <span
                className="
        rounded-xl
        bg-white/10
        border
        border-white/10
        px-4
        py-2
        text-sm
        text-gray-200
        "
              >
                👥 User Management
              </span>

              <span
                className="
        rounded-xl
        bg-white/10
        border
        border-white/10
        px-4
        py-2
        text-sm
        text-gray-200
        "
              >
                📚 Ebook Analytics
              </span>

              <span
                className="
        rounded-xl
        bg-white/10
        border
        border-white/10
        px-4
        py-2
        text-sm
        text-gray-200
        "
              >
                💰 Revenue Tracking
              </span>
            </div>
          </div>
        </section>

        {/* STAT CARDS */}

        <div
          className="
          mt-8
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-5
          "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                rounded-3xl
                border
                bg-white
                p-5
                shadow-sm
                hover:shadow-xl
                transition
                duration-300
                "
            >
              <div
                className={`
                  w-12
                  h-12
                  rounded-2xl
                  bg-gradient-to-r
                  ${item.color}
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow
                  `}
              >
                {item.icon}
              </div>

              <h2
                className="
                  mt-5
                  text-3xl
                  font-bold
                  text-gray-800
                  "
              >
                {item.value}
              </h2>

              <p
                className="
                  text-gray-500
                  mt-1
                  text-sm
                  "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* CHART SECTION */}

        <div
          className="
          mt-10
          "
        >
          <AdminOverviewCharts
            data={{
              ...overview,
              books,
              users,
              transactions,
            }}
          />
        </div>
      </div>
    </div>
  );
}
