import { requireRole } from '@/lib/core/session';
import React from 'react';
export const metadata = {
  title: "Novara-Writer Dashboard",
  description: "Discover the best books, stories, and authors.",
};
const WriterLayout = async({children}) => {
    await requireRole("Writer");
  return children;
};

export default WriterLayout;