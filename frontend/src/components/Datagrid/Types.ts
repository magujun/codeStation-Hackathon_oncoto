import React, { ReactNode } from 'react';

export type DatagridRow = Record<string, ReactNode>;

export type DatagridColumnAlign = 'center' | 'left' | 'right';

export type DatagridColumn = {
  field: string;
  headerName: string;
  align: DatagridColumnAlign;
  headerAligin: DatagridColumnAlign;
  flex: number;
  color?: string;
};
