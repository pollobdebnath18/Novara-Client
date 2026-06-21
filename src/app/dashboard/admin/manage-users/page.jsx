import ManageAllUsersTable from "@/components/admin/ManageAllUsersTable";
import { getAllUsers } from "@/lib/core/session";

export default async function Page() {
  const users = await getAllUsers();
 

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
        <h1 className="text-2xl font-bold">Manage Users</h1>
        <p className="text-sm opacity-80 mt-1">
          Control users, roles, and access from one place.
        </p>
      </div>

      {/* CLIENT TABLE */}
      <ManageAllUsersTable users={users} />
    </div>
  );
}
