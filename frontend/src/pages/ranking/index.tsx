import React, { useMemo, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { getRanking, OutRanking } from '../../services/api/ranking';
import { Container } from '../../components/Layout/Container';
import { Datagrid } from '../../components/Datagrid';
import { DatagridColumn } from '../../components/Datagrid/Types';
import { Pagination } from '../../components/Pagination';
import { Avatar } from '../../components/Avatar';
import { RankingDataCard } from '../../components/DataCard/RankingDataCard';

const columns: DatagridColumn[] = [
  {
    field: 'positionIcon',
    headerName: 'POSIÇÃO',
    flex: 0.05,
    align: 'center',
    headerAlign: 'center',
  },
  {
    field: 'user',
    headerName: 'USUÁRIO',
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

type RankingProps = {
  data: OutRanking[];
};

const Ranking = ({ data }: RankingProps) => {
  const isTabletOrWider = useBreakpointValue({
    base: false,
    sm: true,
  });

  const pageSize = 5;
  const [page, setPage] = useState(1);

  const rows = useMemo(
    () =>
      data
        .map((row: OutRanking, index) => {
          if (index < page * pageSize && index >= page * pageSize - pageSize) {
            return {
              positionIcon:
                row.position >= 1 && row.position <= 3 ? (
                  <Image
                    src={`/images/top${row.position}.svg`}
                    alt={`top${row.position}`}
                    width="40px"
                    height="40px"
                  />
                ) : (
                  row.position
                ),
              position: row.position,
              user: (
                <Box display="flex" alignItems="center">
                  <Avatar
                    altText={row.nick}
                    firstNameInitialLetter={row.nick[0]}
                    imgUrl={row.avatar}
                  />
                  <Text ml="8">{row.nick}</Text>
                </Box>
              ),
              level: <Text textTransform="capitalize">{row.level}</Text>,
              score: row.score,
            };
          }
        })
        .filter(row => !!row) ?? [],
    [data, page],
  );

  return (
    <div>
      <Head>
        <title>oncoto? | Ranking</title>
      </Head>
      <main>
        <Container mt="4">
          <Text fontSize="4xl" fontWeight={500}>
            Ranking
          </Text>
          {rows?.length > 0 ? (
            <Box w="100%" pt={{ base: '4', md: "0" }}>
              {isTabletOrWider ? (
                <Datagrid
                  columns={columns}
                  rows={rows ?? []}
                  paddingCell={5}
                  columnId="position"
                  templateColumns={'0.10fr 0.90fr'}
                />
              ) : (
                <RankingDataCard
                  rows={rows ?? []}
                  columnId="position"
                  templateColumns={'1fr'}
                />
              )}
              <Pagination
                totalCountOfRegisters={data.length ?? 0}
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

export default Ranking;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    const response = await getRanking();

    return {
      props: {
        data: response?.data ?? [],
      },
    };
  },
);
