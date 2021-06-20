import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { Box, Grid, Stack, Text } from '@chakra-ui/react';

import { withSSRAuth } from '../../../utils/withSSRAuth';
import { useGameData } from '../../../hook/useGameData';
import { Container } from '../../../components/Layout/Container';
import { DisplayMap } from '../../../components/DisplayMap';

export type SummaryProps = {
  googleMapsApiKey: string;
};

const Summary = ({ googleMapsApiKey }: SummaryProps) => {
  const { push } = useRouter();
  const { userGoalPoint, userGuessPoint, elapsedTime, distance, score } =
    useGameData();

  console.log(score, userGoalPoint, userGuessPoint, elapsedTime, distance);

  return (
    <div>
      <Head>
        <title>oncoto | History</title>
      </Head>
      <main>
        <Box w="100%" h="300px">
          <DisplayMap
            googleMapsApiKey={googleMapsApiKey}
            center={{ lat: 0, lng: 0 }}
            zoom={2}
            goal={{
              lat: userGoalPoint?.lat,
              lng: userGoalPoint?.long,
            }}
            guess={{
              lat: userGuessPoint?.lat,
              lng: userGuessPoint?.long,
            }}
          />
        </Box>
        <Container mt="4" fontWeight="bold">
          <Grid
            gap="5"
            templateColumns={['1fr', '1fr', '1fr 1fr', '1fr 1fr 1fr']}
            textAlign="center"
          >
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="1.5rem">Sua pontuação</Text>
              <Text fontSize="6rem" fontWeight="bold">
                {score < 0 ? 0 : score}
              </Text>
            </Stack>
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="1.5rem">Tempo</Text>
              <Text fontSize="6rem" fontWeight="bold">
                {elapsedTime ?? ""}
              </Text>
            </Stack>
            <Stack
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="1.5rem">Distância</Text>
              <Text fontSize="6rem" fontWeight="bold">
                {distance < 0 ? '' : `${Math.floor(distance / 1000)} km`}
              </Text>
            </Stack>
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default Summary;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    return {
      props: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
      },
    };
  },
);
