import { requireRole } from '@/lib/core/session';
import React from 'react';

const WriterLayout = async({children}) => {
    await requireRole("Writer");
  return children;
};

export default WriterLayout;