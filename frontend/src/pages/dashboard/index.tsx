import React, { useState } from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { GetServerSideProps } from 'next';
import { useSession } from 'next-auth/client';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { Datagrid } from '../../components/Datagrid';
import { DatagridColumn } from '../../components/Datagrid/Types';
import { Container } from '../../components/Layout/Container';
import { Pagination } from '../../components/Pagination';
import { getGameHistoryPlayer, OutGameHistory } from '../../services/player';
import { useMemo } from 'react';
import { Button } from '../../components/Button';
import { useGameData } from '../../hook/useGameData';

const columns: DatagridColumn[] = [
  {
    field: 'date',
    headerName: 'DATA',
    flex: 0.1,
    align: 'center',
    headerAligin: 'center',
  },
  {
    field: 'time',
    headerName: 'TEMPO',
    flex: 0.5,
    align: 'left',
    headerAligin: 'left',
  },
  {
    field: 'level',
    headerName: 'NÍVEL',
    flex: 0.25,
    align: 'center',
    headerAligin: 'center',
  },
  {
    field: 'score',
    headerName: 'PONTUAÇÃO',
    flex: 0.25,
    align: 'center',
    headerAligin: 'center',
    color: 'blue.800',
  },
];

const Dashboard = () => {
  const pageSize = 5;
  const [page, setPage] = useState(1);
  const [session] = useSession();
  const { onStartNewGame } = useGameData();

  const { data, isLoading } = useQuery(
    ['select-history', session?.playerId],
    () => getGameHistoryPlayer((session?.playerId as string) ?? '0'),
    {
      enabled: !!session?.playerId,
    },
  );

  const rows = useMemo(
    () =>
      data?.data
        .map((row: OutGameHistory, index) => {
          if (index < page * pageSize && index >= page * pageSize - pageSize) {
            return {
              date: format(new Date(row.date), 'dd/MM/yyyy'),
              id: row.id,
              level: row.level,
              score: row.score,
              time: format(new Date(row.time), 'hh:mm:ss'),
            };
          }
        })
        .filter(row => !!row) ?? [],
    [data?.data, page],
  );

  return (
    <div>
      <Head>
        <title>oncoto | Dashboard</title>
      </Head>
      <main>
        <Container mt="4">
          <Text fontSize="4xl" fontWeight={500} mb="4">
            Jogar
          </Text>
          <Box mb="4" display="flex" justifyContent="space-between">
            <Button mb="8" onClick={() => onStartNewGame('easy')}>
              Fácil
            </Button>
            <Button mb="8" onClick={() => onStartNewGame('medium')}>
              Médio
            </Button>
            <Button mb="8" onClick={() => onStartNewGame('hard')}>
              Difícil
            </Button>
          </Box>

          <Text fontSize="4xl" fontWeight={500} mb="4">
            Histórico de Partidas
          </Text>

          {rows?.length > 0 ? (
            <Box w="100%">
              {isLoading ? (
                <Spinner />
              ) : (
                <Datagrid
                  columns={columns}
                  rows={rows ?? []}
                  paddingCell={5}
                  columnId="id"
                  templateColumns={'0.15fr 0.85fr'}
                />
              )}
              <Pagination
                totalCountOfRegisters={data?.data.length ?? 0}
                onPageChange={(page: number) => setPage(page)}
                currentPage={page}
                registersPerPage={pageSize}
              />
            </Box>
          ) : (
            <Text>Nenhuma partida encontrada</Text>
          )}
        </Container>
      </main>
    </div>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    // const session = await getSession(context);
    // console.log(session);

    return {
      props: {},
    };
  },
);
