import React, { memo } from 'react';
import { Box, Grid, GridItem, GridItemProps } from '@chakra-ui/react';
import { Cell } from './Cell';
import { DatagridColumn, DatagridRow } from './Types';

type RowProps = {
  columns: DatagridColumn[];
  row?: DatagridRow;
  paddingCell: number;
  isHeader?: boolean;
  columnId: string;
  templateColumns: string;
} & GridItemProps;

export const Row = memo(
  ({
    columns,
    row,
    paddingCell,
    columnId,
    templateColumns,
    isHeader = false,
    ...props
  }: RowProps) => {
    return (
      <GridItem colSpan={2} {...props} display="flex">
        <Grid templateColumns={templateColumns} gap={1} display="flex" w="100%">
          <Cell
            alignCell={isHeader ? columns[0].headerAlign : columns[0].align}
            padding={isHeader ? paddingCell : paddingCell + 1}
            value={isHeader ? columns[0].headerName : row[columns[0].field]}
            fontWeight={500}
            color={isHeader ? 'gray.400' : columns[0].color ?? 'black.450'}
            bg={isHeader ? '' : 'white'}
            flex={columns[0].flex}
          />
          <Box
            w="100%"
            h="3.75rem"
            borderRadius="5px"
            display="flex"
            alignItems="center"
            bg={isHeader ? '' : 'white'}
            flex={1 - columns[0].flex}
            key={
              isHeader
                ? `box ${columns[0].field} ${columns[0].headerName}`
                : `box ${row[columnId]} ${columns[0].field}`
            }
          >
            {columns.slice(1).map(column => {
              const cellKey = isHeader
                ? `${column.field} ${column.headerName}`
                : `${row[columnId]} ${column.field}`;

              return (
                <Cell
                  key={cellKey}
                  alignCell={isHeader ? column.headerAlign : column.align}
                  padding={isHeader ? paddingCell : paddingCell + 1}
                  value={isHeader ? column.headerName : row[column.field]}
                  fontWeight={500}
                  color={isHeader ? 'gray.400' : column.color ?? 'black.450'}
                  flex={column.flex}
                />
              );
            })}
          </Box>
        </Grid>
      </GridItem>
    );
  },
);
