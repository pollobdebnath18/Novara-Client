import AdminOverviewCharts from "@/components/admin/AdminOverviewCharts";
import { getTransactions } from "@/lib/api/admin";
import { getAllUsers} from "@/lib/core/session";

export default async function AdminHomePage() {
  const users = await getAllUsers();
  const transactions = await getTransactions();


  const overview = {
    totalUsers: users.length,

    totalWriters: users.filter((user) => user.role === "Writer").length,

    totalReaders: users.filter((user) => user.role === "Reader").length,

    totalRevenue: transactions.reduce(
      (total, item) => total + Number(item.priceId || 0),
      0,
    ),
  };

  // console.log(overview);

  return (
    <div className="space-y-8">
      {/* ADMIN DASHBOARD CONTAINER */}
      <div
        className="
      rounded-3xl
      bg-white
      border
      shadow-lg
      p-6
      md:p-8
      "
      >
        {/* HEADER */}
        {/* MODERN ADMIN HEADER */}

        <div
          className="
  relative
  overflow-hidden
  rounded-3xl
  p-8
  md:p-10
  text-white
  shadow-2xl
  bg-gradient-to-br
  from-slate-900
  via-indigo-700
  to-purple-600
  "
        >
          {/* Background Shapes */}

          <div
            className="
    absolute
    -top-20
    -right-20
    w-72
    h-72
    rounded-full
    bg-white/10
    blur-3xl
    "
          />

          <div
            className="
    absolute
    -bottom-24
    -left-20
    w-64
    h-64
    rounded-full
    bg-purple-300/20
    blur-3xl
    "
          />

          <div className="relative z-10 flex justify-between items-center">
            <div>
              {/* Badge */}

              <div
                className="
        inline-flex
        items-center
        gap-2
        px-4
        py-2
        rounded-full
        bg-white/15
        backdrop-blur
        border
        border-white/20
        text-sm
        mb-5
        "
              >
                📊 Admin Control Center
              </div>

              <h1
                className="
        text-4xl
        md:text-5xl
        font-extrabold
        tracking-tight
        "
              >
                Admin Dashboard
              </h1>

              <p
                className="
        mt-3
        max-w-xl
        text-white/80
        text-sm
        md:text-base
        "
              >
                Monitor users, manage ebooks, track transactions and analyze
                your platform performance.
              </p>

              {/* small info */}

              <div
                className="
        mt-6
        flex
        flex-wrap
        gap-3
        "
              >
                <div
                  className="
          px-4
          py-2
          rounded-xl
          bg-white/10
          backdrop-blur
          border
          border-white/20
          text-sm
          "
                >
                  👥 User Management
                </div>

                <div
                  className="
          px-4
          py-2
          rounded-xl
          bg-white/10
          backdrop-blur
          border
          border-white/20
          text-sm
          "
                >
                  📚 Ebook Analytics
                </div>

                <div
                  className="
          px-4
          py-2
          rounded-xl
          bg-white/10
          backdrop-blur
          border
          border-white/20
          text-sm
          "
                >
                  💰 Revenue Tracking
                </div>
              </div>
            </div>

            {/* Right Icon */}

            <div
              className="
      hidden
      md:flex
      w-28
      h-28
      rounded-full
      bg-white/20
      backdrop-blur
      items-center
      justify-center
      text-6xl
      shadow-xl
      "
            >
              🚀
            </div>
          </div>
        </div>

        {/* ANALYTICS */}
        <AdminOverviewCharts data={overview} />
      </div>
    </div>
  );
}
