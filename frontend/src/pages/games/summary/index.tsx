import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetServerSideProps } from 'next';
import {
  Box,
  Button,
  Grid,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

import { Modal } from '../../../components/Modal';
import { useGameData } from '../../../hook/useGameData';
import { withSSRAuth } from '../../../utils/withSSRAuth';
import { NewGame } from '.././../../components/NewGame';
import { DisplayMap } from '../../../components/DisplayMap';
import { Container } from '../../../components/Layout/Container';

export type SummaryProps = {
  googleMapsApiKey: string;
};

const Summary = ({ googleMapsApiKey }: SummaryProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { userGoalPoint, userGuessPoint, elapsedTime, distance, score } =
    useGameData();

  const distanceInKM = distance / 1000;
  const distanceInMi = distanceInKM / 1609.34;
  const guessIcon =
    distanceInKM <= 10
      ? '/images/green_point.svg'
      : distanceInKM <= 100
      ? '/images/yellow_point.svg'
      : '';

  console.log(
    'summary values',
    score,
    userGoalPoint,
    userGuessPoint,
    elapsedTime,
    distance,
  );

  return (
    <div>
      <Head>
        <title>oncoto | History</title>
      </Head>
      <main>
        <Box w="100%" h="30vh">
          <DisplayMap
            googleMapsApiKey={googleMapsApiKey}
            center={{
              lat: userGoalPoint?.lat,
              lng: userGoalPoint?.long,
            }}
            zoom={1}
            goal={{
              lat: userGoalPoint?.lat,
              lng: userGoalPoint?.long,
            }}
            guess={{
              lat: userGuessPoint?.lat,
              lng: userGuessPoint?.long,
            }}
            guessIcon={guessIcon}
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
                  : distanceInKM > 1800
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
                <Link href="/dashboard" passHref>
                  <Button
                    as="a"
                    size="lg"
                    flex="1"
                    m="1"
                    bg="white"
                    color="blue.900"
                    border="1px solid"
                    borderColor="blue.900"
                    _hover={{
                      bg: 'blue.900',
                      color: 'white',
                    }}
                  >
                    Não
                  </Button>
                </Link>
                <Button
                  size="lg"
                  flex="1"
                  m="1"
                  bg="blue.900"
                  color="white"
                  _hover={{
                    bg: 'white',
                    color: 'blue.900',
                    borderColor: 'blue.900',
                    border: '1px solid',
                  }}
                  onClick={onOpen}
                >
                  Sim
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </main>
      <Modal open={isOpen} onClose={onClose}>
        <NewGame alignTitle="center" />
      </Modal>
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
