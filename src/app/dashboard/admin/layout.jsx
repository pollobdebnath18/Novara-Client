import { requireRole } from "@/lib/core/session";
import React from "react";

export const metadata = {
  title: "Novara-Admin Dashboard",
  description: "Discover the best books, stories, and authors.",
};

const AdminLayout = async ({ children }) => {
  await requireRole("Admin");
  return children;
};

export default AdminLayout;
