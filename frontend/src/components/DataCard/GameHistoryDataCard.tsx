import React from 'react';
import { Grid, GridItem, Table, Tbody, Td, Th, Tr } from '@chakra-ui/react';

type IDataCard = { date: string; id: string; level: string; score: number; time: string; }

type GameHistoryDataCardProps = {
  rows: IDataCard[];
  columnId: string;
  templateColumns: string;
};

export const GameHistoryDataCard = ({
  rows,
  columnId,
  templateColumns,
}: GameHistoryDataCardProps) => {
  return (
    <Grid templateColumns={templateColumns} gap={3}>
      {rows.map((row) => {
        return (
          <GridItem
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="5px"
            bg="white"
            p="2"
            key={`GameHistoryDataCard-${String(row[columnId])}`}
          >
            <Table colorScheme="whiteAlpha" size="sm">
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
          </GridItem>
        )
      })}
    </Grid>
  );
};
