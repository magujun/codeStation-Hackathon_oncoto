import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { Box, Button, Grid, Stack, Text } from '@chakra-ui/react';

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

  const distanceInKM = distance / 1000;
  const distanceInMi = distanceInKM / 1609.34;

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
                {elapsedTime ?? ''}
              </Text>
            </Stack>
            <Stack
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="1.5rem">Distância</Text>
              <Text fontSize="6rem" fontWeight="bold">
                {distance < 0
                  ? ''
                  : distanceInKM > 1000
                  ? `${Math.floor(distanceInMi)} mi`
                  : `${Math.floor(distanceInKM)} km`}
              </Text>
            </Stack>
          </Grid>
          <Box
            mt="10"
            mx="auto"
            w={{ base: '100%', md: '600px' }}
            height="250px"
            display="flex"
            flexDir="column"
            alignContent="center"
            justifyContent="center"
            bg="white"
            borderRadius="30px"
          >
            <Box p="100px" textAlign="center">
              <Text fontWeight="bold" fontSize="1.75rem" mb="4">
                Deseja jogar novamente?
              </Text>
              <Box w="100%" display="flex">
                <Button
                  size="lg"
                  flex="1"
                  m="1"
                  bg="white.200"
                  color="blue.900"
                  border="1px solid"
                  borderColor="blue.900"
                  _hover={{
                    bg: 'blue.900',
                    color: 'white.200',
                  }}
                >
                  Não
                </Button>
                <Button
                  size="lg"
                  flex="1"
                  m="1"
                  bg="blue.900"
                  color="white.200"
                  _hover={{
                    bg: 'white.200',
                    color: 'blue.900',
                    borderColor: 'blue.900',
                    border: '1px solid',
                  }}
                >
                  Sim
                </Button>
              </Box>
            </Box>
          </Box>
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
