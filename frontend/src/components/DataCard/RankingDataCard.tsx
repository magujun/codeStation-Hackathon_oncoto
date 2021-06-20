import React from 'react';
import { Grid, GridItem, Table, Tbody, Td, Th, Tr } from '@chakra-ui/react';

type IDataCard = {
  positionIcon: number | JSX.Element;
  position: number;
  user: JSX.Element;
  level: number;
  score: number;
}

type RankingDataCardProps = {
  rows: IDataCard[];
  columnId: string;
  templateColumns: string;
};

export const RankingDataCard = ({
  rows,
  columnId,
  templateColumns,
}: RankingDataCardProps) => {
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
            key={`RankingDataCard-${String(row[columnId])}`}
          >
            <Table
              colorScheme="whiteAlpha"
              size="sm"
            >
              <Tbody>
                <Tr textAlign="center">
                  <Th>Posição</Th>
                  <Td textAlign="end" data-testid="user-position">{row["positionIcon"]}</Td>
                </Tr>
                <Tr textAlign="center">
                  <Th>Usuário</Th>
                  <Td textAlign="end">{row["user"]}</Td>
                </Tr>
                <Tr textAlign="center">
                  <Th>Nível</Th>
                  <Td textAlign="end" data-testid="user-difficulty-level">{row["level"]}</Td>
                </Tr>
                <Tr textAlign="center">
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
