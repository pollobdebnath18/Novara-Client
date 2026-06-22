'use client';
import { Card } from '@heroui/react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const stats = [
  { id: 'users', title: 'Users', value: 120 },
  { id: 'writers', title: 'Writers', value: 45 },
  { id: 'books', title: 'Books Sold', value: 320 },
  { id: 'revenue', title: 'Revenue', value: '৳45,000' },
];

const genreData = [
  { genre: 'Programming', value: 40 },
  { genre: 'Technology', value: 25 },
  { genre: 'Education', value: 20 },
  { genre: 'Fiction', value: 15 },
];

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

const AdminOverviewCharts = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <Card key={s.id} className="p-5 rounded-2xl shadow-sm dark:bg-slate-800">
            <p className="text-gray-500 dark:text-gray-400 text-sm">{s.title}</p>
            <h2 className="text-2xl font-bold mt-1 dark:text-white">{s.value}</h2>
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
          <h2 className="font-semibold mb-3 dark:text-white">Ebooks by Genre</h2>
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
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
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