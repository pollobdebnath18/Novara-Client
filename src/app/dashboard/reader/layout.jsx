import { requireRole } from "@/lib/core/session";
import React from "react";

export const metadata = {
  title: "Novara-Reader Dashboard",
  description: "Discover the best books, stories, and authors.",
};

const ReaderLayout = async ({ children }) => {
  await requireRole("Reader");
  return <div>{children}</div>;
};

export default ReaderLayout;
