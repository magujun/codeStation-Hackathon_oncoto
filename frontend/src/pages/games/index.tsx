import React, { useCallback, useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import { BiWorld } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { LoadScriptNext } from '@react-google-maps/api';
import { GetServerSideProps } from 'next';

import { withSSRAuth } from '../../utils/withSSRAuth';
import { Map } from '../../components/Map';
import { StreetViewMap } from '../../components/StreetViewMap';
import { Button } from '../../components/Button';
import { useGameData } from '../../hook/useGameData';
import { getRandomLocation } from '../../services/api/locations';
import { Timer } from '../../components/Timer';
import { getLevelTime } from '../../utils/getLevelTime';

type Position = {
  lat: number;
  lng: number;
};

type GameProps = {
  googleMapsApiKey: string;
  startPoint: Position;
};

const Game = ({ googleMapsApiKey, startPoint }: GameProps) => {
  const { difficultyLevel, onEndGame, onStartTime } = useGameData();

  const [showGuessMap, setShowGuessMap] = useState(false);
  const [guess, setGuess] = useState<Position>(null);
  const time = useRef<number>(getLevelTime(difficultyLevel ?? 'easy'));
  const startDate = useRef<number>(Date.now());
  const finishDate = useRef<number>(startDate.current + time.current);

  useEffect(() => {
    onStartTime(new Date(startDate.current));
  }, []);

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
    onEndGame({
      goalPoint: {
        lat: startPoint.lat,
        long: startPoint.lng,
      },
      endGameTime: new Date(),
      startGameTime: new Date(startDate.current),
      guessPoint: {
        lat: guess.lat,
        long: guess.lng,
      },
    });
  }, [guess, startPoint]);

  const handleTimeout = useCallback(() => {
    onEndGame({
      goalPoint: {
        lat: startPoint.lat,
        long: startPoint.lng,
      },
      endGameTime: new Date(),
      startGameTime: new Date(startDate.current),
      guessPoint: {
        lat: guess?.lat,
        long: guess?.lng,
      },
    });
  }, [guess, startPoint]);

  return (
    <div>
      <Head>
        <title>oncoto? | Game</title>
      </Head>
      <main>
        <Box display="flex" alignItems="center">
          <Box w="100%" height="calc(100vh - 80px)">
            <Timer finishDate={finishDate.current} onTimeout={handleTimeout} />
            <LoadScriptNext googleMapsApiKey={googleMapsApiKey}>
              <>
                <StreetViewMap
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
                    center={{ lat: 0, lng: 0 }}
                    zoom={1}
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
                >
                  Já sei o lugar
                </Button>
              </>
            </LoadScriptNext>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default Game;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    const { data } = await getRandomLocation();

    const startPoint = {
      lat: parseFloat(data.coordinates?.split(',')[0]) ?? 52.47876324394502,
      lng: parseFloat(data.coordinates?.split(',')[1]) ?? -1.913465674644272,
    };

    return {
      props: {
        googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        startPoint,
      },
    };
  },
);
