import React, { useCallback } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import { GetServerSideProps } from 'next';
import {
  Box,
  Flex,
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
import { Button } from '../../../components/Button';
import { OutlinedButton } from '../../../components/OutlinedButton';

export type SummaryProps = {
  googleMapsApiKey: string;
};

const Summary = ({ googleMapsApiKey }: SummaryProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleRedirectUserToDashboard = useCallback(() => {
    Router.push('/dashboard');
  }, [Router]);

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
              <Text fontSize={{ base: "4rem", md: "5rem" }} fontWeight="bold">
                {score < 0 ? 0 : score}
              </Text>
            </Stack>
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Text fontSize="1.5rem">Tempo</Text>
              <Text fontSize={{ base: "4rem", md: "5rem" }} fontWeight="bold">
                {elapsedTime ?? ''}
              </Text>
            </Stack>
            <Stack
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text fontSize="1.5rem">Distância</Text>
              <Text fontSize={{ base: "4rem", md: "5rem" }} fontWeight="bold">
                {distance < 0
                  ? ''
                  : distanceInKM > 9999
                  ? `${Math.floor(distanceInMi)} mi`
                  : `${Math.floor(distanceInKM)} km`}
              </Text>
            </Stack>
          </Grid>
          <Flex
            mt="10"
            mb={{ base: '10', md: '0' }}
            mx="auto"
            w={{ base: '100%', md: '600px' }}
            height="250px"
            flexDir="column"
            alignContent="center"
            justifyContent="center"
            borderRadius="30px"
            backgroundColor="rgba(255, 255, 255, 0.85)"
            boxShadow="4px 10px 30px rgba(159, 209, 255, 0.1);"
          >
            <Box p={{ base: "2.25rem", md: "6.25rem" }} textAlign="center">
              <Text fontWeight="bold" fontSize={{ base: "lg", sm: "xl", md: "2xl" }} mb="4">
                Deseja jogar novamente?
              </Text>

              <Flex w="100%" alignItems="center" flexDirection={{ base: 'column', md: 'row' }}>
                <OutlinedButton
                  mr={{ base: '0', md: '1' }}
                  mb={{ base: '2', md: '0' }}
                  w="100%"
                  onClick={handleRedirectUserToDashboard}
                >
                  Não
                </OutlinedButton>
                <Button
                  w="100%"
                  onClick={onOpen}
                >
                  Sim
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Container>
      </main>
      <Modal open={isOpen} onClose={onClose}>
        <NewGame alignSelfTitle="center" textAlignTitle="center" />
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
