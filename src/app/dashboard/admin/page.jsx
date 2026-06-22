
import AdminOverviewCharts from '@/components/admin/AdminOverviewCharts';

export default function AdminHomePage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>

      <div className="border rounded-2xl p-5 bg-white shadow-sm">
        <h2 className="font-semibold text-lg mb-3">Monthly Sales</h2>
      </div>
      <AdminOverviewCharts />
    </div>
  );
}