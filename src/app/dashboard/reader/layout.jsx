import { requireRole } from "@/lib/core/session";
import React from "react";

const ReaderLayout = async ({ children }) => {
  await requireRole("Reader");
  return <div>{children}</div>;
};

export default ReaderLayout;
