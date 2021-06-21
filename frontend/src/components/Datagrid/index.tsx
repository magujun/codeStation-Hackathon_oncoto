import React from 'react';
import { Grid } from '@chakra-ui/react';
import { DatagridColumn, DatagridRow } from './Types';
import { Row } from './Row';

export type DatagridProps = {
  columns: DatagridColumn[];
  rows: DatagridRow[];
  paddingCell: number;
  columnId: string;
  templateColumns: string;
};

export const Datagrid = ({
  columns,
  rows,
  paddingCell,
  columnId,
  templateColumns,
}: DatagridProps) => {
  return (
    <Grid templateColumns={templateColumns} gap={1}>
      <Row
        templateColumns={templateColumns}
        columnId={columnId}
        columns={columns}
        isHeader
        paddingCell={paddingCell}
      />
      {rows.map(row => (
        <Row
          templateColumns={templateColumns}
          key={`${row[columnId]}`}
          columnId={columnId}
          columns={columns}
          paddingCell={paddingCell}
          row={row}
        />
      ))}
    </Grid>
  );
};
