import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import React from "react";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="sticky top-0 z-40 w-10 md:w-72 h-screen border-r border-default bg-background">
        <DashboardSidebar></DashboardSidebar>
      </div>
      <div className="flex-1  overflow-auto mx-4">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
