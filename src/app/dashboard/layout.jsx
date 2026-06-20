import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import React from "react";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <DashboardSidebar></DashboardSidebar>
      <div className="flex-1 p-4 overflow-auto">{children}</div>
    </div>
  );
};

export default DashBoardLayout;
