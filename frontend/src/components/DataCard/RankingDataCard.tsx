import React from 'react';
import { Grid, Table, Tbody, Td, Th, Tr } from '@chakra-ui/react';

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
    <Grid templateColumns={templateColumns} gridTemplateColumns="1fr" gap={1}>
      {rows.map((row) => {
        return (
          <Table key={String(row[columnId])} variant="simple" size="sm">
            <Tbody>
              <Tr>
                <Th>Posição</Th>
                <Td textAlign="end">{row["position"]}</Td>
              </Tr>
              <Tr>
                <Th>Usuário</Th>
                <Td textAlign="end">{row["user"]}</Td>
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
