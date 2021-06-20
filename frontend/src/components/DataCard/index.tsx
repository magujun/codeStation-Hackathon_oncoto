import React from 'react';
import { Grid, Table, Tbody, Td, Th, Tr } from '@chakra-ui/react';

type IDataCard = { date: string; id: string; level: string; score: number; time: string; }

type GameHistoryMobileCardProps = {
  rows: IDataCard[];
  columnId: string;
  templateColumns: string;
};

export const DataCard = ({
  rows,
  columnId,
  templateColumns,
}: GameHistoryMobileCardProps) => {
  return (
    <Grid templateColumns={templateColumns} gridTemplateColumns="1fr" gap={1}>
      {rows.map((row) => {
        return (
          <Table key={String(row[columnId])} variant="simple" size="sm">
            <Tbody>
              <Tr>
                <Th>Data</Th>
                <Td textAlign="end">{row["date"]}</Td>
              </Tr>
              <Tr>
                <Th>Tempo</Th>
                <Td textAlign="end">{row["time"]}</Td>
              </Tr>
              <Tr>
                <Th>Nível</Th>
                <Td textAlign="end">{row["level"]}</Td>
              </Tr>
              <Tr>
                <Th>Pontuação</Th>
                <Td textAlign="end">{row["score"]}</Td>
              </Tr>
            </Tbody>
          </Table>
        )
      })}
    </Grid>
  );
};
