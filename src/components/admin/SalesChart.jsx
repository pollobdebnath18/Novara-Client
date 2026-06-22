"use client";

import { Card } from "@heroui/react";
import SalesChart from "@/components/admin/SalesChart";

export default function AdminHomePage() {
  const stats = [
    { title: "Users", value: 120 },
    { title: "Writers", value: 45 },
    { title: "Books Sold", value: 320 },
    { title: "Revenue", value: "৳45,000" },
  ];

  const genreData = [
    { genre: "Programming", value: 40 },
    { genre: "Technology", value: 25 },
    { genre: "Education", value: 20 },
    { genre: "Fiction", value: 15 },
  ];

  return (
    <div className="p-6 space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500">
          Overview of users, ebooks, and platform analytics
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <Card key={i} className="p-5 rounded-2xl shadow-sm">
            <p className="text-gray-500 text-sm">{s.title}</p>
            <h2 className="text-2xl font-bold mt-1">{s.value}</h2>
          </Card>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* LINE CHART */}
        <div className="border rounded-2xl p-5 bg-white shadow-sm">
          <h2 className="font-semibold mb-3">Monthly Sales</h2>
          <SalesChart />
        </div>

        {/* PIE CHART */}
        <div className="border rounded-2xl p-5 bg-white shadow-sm">
          <h2 className="font-semibold mb-3">Ebooks by Genre</h2>

          <div className="h-72"></div>
        </div>
      </div>
    </div>
  );
}
