import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import { BiWorld } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { Map } from '../../components/Map';
import { StreetViewMap } from '../../components/StreetViewMap';
import { Button } from '../../components/Button';
import { useGameData } from '../../hook/useGameData';

type Position = {
  lat: number;
  lng: number;
};

type GameProps = {
  googleMapsApiKey: string;
  startPoint: Position;
};

const Game = ({ googleMapsApiKey, startPoint }: GameProps) => {
  // TODO: Verificar se ao entrar o jogo foi iniciado, caso contrário usar um navigate(-1);
  const { userGuessPoint } = useGameData();
  const [showGuessMap, setShowGuessMap] = useState(false);
  const [guess, setGuess] = useState<Position>(null);

  const variant = useBreakpointValue({
    base: 'outline',
    sm: '80vh',
    md: '80vh',
    lg: '80vh',
    xl: '90vh',
  });

  const guessMapY = useBreakpointValue({
    base: '60%',
    md: '50%',
    lg: '45%',
    xl: '40%',
  });

  const guessMapX = useBreakpointValue({
    base: '90%',
    md: '40%',
    lg: '35%',
    xl: '30%',
  });

  const handleGuessButtonClick = useCallback(() => {
    setShowGuessMap(true);
  }, [setShowGuessMap]);

  const handleCloseMapClick = useCallback(() => {
    setShowGuessMap(false);
  }, [setShowGuessMap]);

  const handleGuess = (guess: Position) => {
    setGuess(guess);
  };

  const handleConfirmarClick = useCallback(() => {
    console.log(guess);
  }, [guess])

  return (
    <div>
      <Head>
        <title>oncoto | Game</title>
      </Head>
      <main>
        <Box display="flex" alignItems="center">
          <Box w="100%" height={variant}>
            <StreetViewMap
              googleMapsApiKey={googleMapsApiKey}
              startPoint={startPoint}
            />
            <Box
              height={guessMapY}
              width={guessMapX}
              position="fixed"
              bottom="6"
              left="6"
              zIndex="11"
              bg="white.200"
              borderRadius="8px"
              overflow="hidden"
              display="flex"
              flexDirection="column"
              alignItems="flex-end"
              minHeight="150px"
              minWidth="100px"
              hidden={!showGuessMap}
            >
              <IconButton
                icon={<IoMdClose />}
                aria-label="close-map"
                variant="ghost"
                color="red"
                position="fixed"
                zIndex="10"
                fontSize="2rem"
                onClick={handleCloseMapClick}
              />
              <Map
                googleMapsApiKey={googleMapsApiKey}
                center={startPoint}
                onGuess={handleGuess}
              />
              <Button
                w="100%"
                borderTopLeftRadius={0}
                borderTopRightRadius={0}
                disabled={!guess?.lat}
                onClick={handleConfirmarClick}
              >
                Confirmar
              </Button>
            </Box>
            <Button
              leftIcon={<BiWorld />}
              position="fixed"
              bottom="6"
              left="6"
              zIndex="10"
              onClick={handleGuessButtonClick}
              iconSpacing="2"
              alignItems="center"
            >
              Advinhar
            </Button>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Game;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    // TODO: Pegar ponto da api
    return {
      props: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        startPoint: { lat: 52.47876324394502, lng: -1.913465674644272 },
      },
    };
  },
);
