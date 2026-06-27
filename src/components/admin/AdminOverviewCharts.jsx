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

import { Users, PenTool, BookOpen, Wallet } from "lucide-react";

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"];

const AdminOverviewCharts = ({ data }) => {
  // dynamic genre chart

  const genreData = Object.entries(
    data.books.reduce((acc, book) => {
      acc[book.genre] = (acc[book.genre] || 0) + 1;

      return acc;
    }, {}),
  ).map(([genre, value]) => ({
    genre,
    value,
  }));

  const stats = [
    {
      title: "Total Users",
      value: data.totalUsers,
      icon: Users,
      description: "Registered users",
    },

    {
      title: "Total Writers",
      value: data.totalWriters,
      icon: PenTool,
      description: "Active authors",
    },

    {
      title: "Ebooks Sold",
      value: data.totalBooksSold,
      icon: BookOpen,
      description: "Purchased ebooks",
    },

    {
      title: "Total Revenue",
      value: `৳${data.totalRevenue}`,
      icon: Wallet,
      description: "Total earnings",
    },
  ];


  return (
    <div className="p-6 space-y-8">
      {/* CHARTS */}

      <div
        className="
grid
md:grid-cols-2
gap-6
"
      >
        {/* Genre Pie Chart */}

        <div
          className="
border
rounded-3xl
p-6
bg-white
shadow-sm
"
        >
          <h2
            className="
font-bold
text-lg
mb-5
"
          >
            Ebooks By Genre
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genreData}
                dataKey="value"
                nameKey="genre"
                cx="50%"
                cy="50%"
                outerRadius={90}
              >
                {genreData.map((_, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
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
