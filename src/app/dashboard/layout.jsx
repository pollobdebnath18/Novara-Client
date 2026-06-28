import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { getUserSession } from "@/lib/core/session";

const DashBoardLayout = async ({ children }) => {
  const user = await getUserSession();

  return (
    <div className="flex min-h-screen">
      {/* SIDEBAR */}
      <aside
        className="
  sticky
  top-0
  h-screen
  md:w-48
  lg:w-64
  border-r
  bg-white
  "
      >
        <DashboardSidebar />
      </aside>

      {/* RIGHT SIDE */}

      <div className="flex-1 flex flex-col">
        {/* NAVBAR */}
        <DashboardNavbar user={user} />

        {/* CONTENT */}

        <main
          className="
          flex-1
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
};
export default DashBoardLayout;