"use client";
import { Card } from "@heroui/react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const genreData = [
  { genre: "Programming", value: 40 },
  { genre: "Technology", value: 25 },
  { genre: "Education", value: 20 },
  { genre: "Fiction", value: 15 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

const AdminOverviewCharts = ({ data }) => {
  const stats = [
    {
      id: "users",
      title: "Total Users",
      value: data?.users?.length || 0,
    },

    {
      id: "writers",
      title: "Total Writers",
      value: data?.users?.filter((user) => user.role === "Writer").length || 0,
    },

    {
      id: "readers",
      title: "Total Readers",
      value: data?.users?.filter((user) => user.role === "Reader").length || 0,
    },

    {
      id: "revenue",
      title: "Total Revenue",
      value: `৳${
        data?.transactions?.reduce(
          (sum, item) => sum + Number(item.priceId || 0),
          0,
        ) || 0
      }`,
    },
  ];
  return (
    <div className="p-6 space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Overview of users, ebooks, and platform analytics
        </p>
      </div>

      {/* STATS */}
      {/* STATS */}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card
            key={s.id}
            className="
      p-6
      rounded-3xl
      shadow-sm
      border
      bg-white
      hover:shadow-xl
      transition
      "
          >
            <p
              className="
        text-sm
        text-gray-500
        "
            >
              {s.title}
            </p>

            <h2
              className="
        text-3xl
        font-extrabold
        mt-3
        text-gray-800
        "
            >
              {s.value}
            </h2>

            <div
              className="
        mt-4
        h-1
        rounded-full
        bg-gradient-to-r
        from-indigo-500
        to-purple-500
        "
            />
          </Card>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* LINE CHART */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-5 bg-white dark:bg-slate-800 shadow-sm">
          <h2 className="font-semibold mb-3 dark:text-white">Monthly Sales</h2>
          {/* <SalesChart /> */}
        </div>

        {/* PIE CHART */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-2xl p-5 bg-white dark:bg-slate-800 shadow-sm">
          <h2 className="font-semibold mb-3 dark:text-white">
            Ebooks by Genre
          </h2>
          <ResponsiveContainer width="100%" height={288}>
            <PieChart>
              <Pie
                data={genreData}
                dataKey="value"
                nameKey="genre"
                cx="50%"
                cy="50%"
                outerRadius={80}
              >
                {genreData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminOverviewCharts;
