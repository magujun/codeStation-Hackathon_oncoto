import React, { useState } from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import { Box, Text, Flex, VStack, useBreakpointValue } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { Datagrid } from '../../components/Datagrid';
import { DatagridColumn } from '../../components/Datagrid/Types';
import { Container } from '../../components/Layout/Container';
import { Pagination } from '../../components/Pagination';
import {
  getGameHistoryPlayer,
  OutGameHistory,
} from '../../services/api/player';
import { useMemo } from 'react';
import { NewGame } from '../../components/NewGame';
import { getFormatedTime } from '../../utils/getFormatedTime';
import { GameHistoryDataCard } from '../../components/DataCard/GameHistoryDataCard';

const columns: DatagridColumn[] = [
  {
    field: 'date',
    headerName: 'DATA',
    flex: 0.1,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'time',
    headerName: 'TEMPO',
    flex: 0.5,
    align: 'left',
    headerAlign: 'left',
  },
  {
    field: 'level',
    headerName: 'NÍVEL',
    flex: 0.25,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'score',
    headerName: 'PONTUAÇÃO',
    flex: 0.25,
    align: 'center',
    headerAlign: 'center',
    color: 'blue.800',
  },
];

type DashboardProps = {
  data: OutGameHistory[];
};

const Dashboard = ({ data }: DashboardProps) => {
  const isTabletOrWider = useBreakpointValue({
    base: false,
    sm: true,
  });
  const pageSize = 5;
  const [page, setPage] = useState(1);

  const rows = useMemo(() => {
    if (data?.length > 0) {
      return (
        data
          .sort(function (a, b) {
            return (
              new Date(b.gameDate).getTime() - new Date(a.gameDate).getTime()
            );
          })
          .map((row: OutGameHistory, index) => {
            if (
              index < page * pageSize &&
              index >= page * pageSize - pageSize
            ) {
              return {
                date: format(new Date(row.gameDate), 'dd/MM/yyyy'),
                id: row.id,
                level: row.level.charAt(0).toUpperCase() + row.level.slice(1),
                score: row.score,
                time: getFormatedTime(row.elapsedTime),
              };
            }
          })
          .filter(row => {
            return !!row;
          }) ?? []
      );
    } else {
      return [];
    }
  }, [data, page]);

  return (
    <>
      <Head>
        <title>oncoto? | Dashboard</title>
      </Head>
      <main>
        <Container>
          <VStack
            spacing={{ base: '6', lg: '8' }}
            height="calc(100vh-5rem)"
            py="8"
          >
            <Flex w="100%" alignItems="center" justifyContent="center">
              <Box
                width="100%"
                backgroundColor="rgba(255, 255, 255, 0.85)"
                borderColor="rgba(159, 209, 255, 0.2);"
                borderWidth="1px"
                borderStyle="solid"
                borderRadius="2rem"
                boxShadow="4px 10px 30px rgba(159, 209, 255, 0.1);"
              >
                <NewGame />
              </Box>
            </Flex>

            <VStack w="100%" alignItems="center" justifyContent="center">
              <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight={500} alignSelf="flex-start">
                Histórico de Partidas
              </Text>

              {rows?.length > 0 ? (
                <Box w="100%">
                  {isTabletOrWider ? (
                    <Datagrid
                      columns={columns}
                      rows={rows ?? []}
                      paddingCell={5}
                      columnId="id"
                      templateColumns={'0.15fr 0.85fr'}
                    />
                  ) : (
                    <GameHistoryDataCard
                      rows={rows ?? []}
                      columnId="id"
                      templateColumns={'1fr'}
                    />
                  )}
                  <Pagination
                    totalCountOfRegisters={data?.length ?? 0}
                    onPageChange={(page: number) => setPage(page)}
                    currentPage={page}
                    registersPerPage={pageSize}
                  />
                </Box>
              ) : (
                <Text>Nenhuma partida encontrada</Text>
              )}
            </VStack>
          </VStack>
        </Container>
      </main>
    </>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    const { playerId } = await getSession(context);

    const response = await getGameHistoryPlayer((playerId as string) ?? '');

    return {
      props: {
        data: response?.data,
      },
    };
  },
);
