import { ReactNode, useCallback, useState } from 'react';
import Router from 'next/router';
import { differenceInSeconds } from 'date-fns';
import { getFormatedElapsedTime } from '../utils/getFormatedElapsedTime';
import { createContext } from 'use-context-selector';
import { getDistanceBetweetTwoPoints } from '../utils/getDistanceBetweetTwoPoints';
import { registerGame } from '../services/game';
import { useSession } from 'next-auth/client';
import { getPlayerScore } from '../utils/getPlayerScore';

type GeoPoint = {
  lat: number;
  long: number;
};

type EndGameInput = {
  goalPoint: GeoPoint;
  guessPoint: GeoPoint | undefined;
  startGameTime: Date;
  endGameTime: Date;
};

type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface GameContextData {
  userGuessPoint: GeoPoint;
  userGoalPoint: GeoPoint;
  startTime: Date;
  endTime: Date;
  difficultyLevel: DifficultyLevel;
  elapsedTime: string;
  distance: number;
  score: number;
  handleStartNewGame: (difficultyLevelInput: DifficultyLevel) => void;
  handleEndGame: (endGameInput: EndGameInput) => void;
  handleStartTime: (time: Date) => void;
}

interface GameProviderProps {
  children: ReactNode;
}

export const GameContext = createContext<GameContextData>(
  {} as GameContextData,
);

export function GameProvider({ children }: GameProviderProps) {
  const [session] = useSession();
  const [userGuessPoint, setUserGuessPoint] = useState<GeoPoint>(null);
  const [userGoalPoint, setUserGoalPoint] = useState<GeoPoint>(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState('');
  const [distance, setDistance] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>(null);
  const [score, setScore] = useState<number>(null);

  const handleStartTime = useCallback((time: Date) => {
    setStartTime(time);
  }, []);

  const handleStartNewGame = useCallback(
    (difficultyLevelInput: DifficultyLevel) => {
      setDifficultyLevel(difficultyLevelInput);
      // reset values
      setEndTime(null);
      setUserGoalPoint(null);
      setUserGuessPoint(null);
      setScore(null);


      Router.push('/games');
    },
    [],
  );

  const handleEndGame = useCallback(
    async (endGameInput: EndGameInput) => {
      const { endGameTime, startGameTime, guessPoint, goalPoint } = endGameInput;

      setEndTime(endGameTime);
      setStartTime(startGameTime);
      setUserGoalPoint(goalPoint);

      if (guessPoint) {
        setUserGuessPoint(guessPoint);
      }

      const formatedElapsedTime = getFormatedElapsedTime(
        startGameTime,
        endGameTime,
      );

      const distanceInMeters = guessPoint?.lat ? getDistanceBetweetTwoPoints(
        {
          lat: goalPoint.lat,
          lng: goalPoint.long,
        },
        {
          lat: guessPoint.lat,
          lng: guessPoint.long,
        },
      ) : -1;

      setDistance(distanceInMeters);
      setElapsedTime(formatedElapsedTime);

      const elapseTime = differenceInSeconds(endGameTime, startGameTime);

      const guessScore = getPlayerScore(distanceInMeters, difficultyLevel, elapseTime);

      setScore(guessPoint?.lat ? guessScore : 0);

      const data = {
        playerId: session?.playerId as string ?? '',
        level: difficultyLevel ?? 'easy',
        elapsedTime: !isNaN(elapseTime) ? elapseTime : -1,
        locationOrigin: `${goalPoint?.lat},${goalPoint?.long}`,
        locationMarked: guessPoint?.lat ? `${guessPoint?.lat},${guessPoint?.long}` : '',
        distance: distanceInMeters,
        score: guessPoint?.lat ? guessScore : 0, // TO-DO
      };

      registerGame(data);

      // limpando dificuldade
      setDifficultyLevel(null);

      Router.push('/games/summary');
    },
    [startTime, difficultyLevel],
  );

  return (
    <GameContext.Provider
      value={{
        distance,
        elapsedTime,
        userGoalPoint,
        userGuessPoint,
        difficultyLevel,
        endTime,
        startTime,
        score,
        handleStartTime,
        handleStartNewGame,
        handleEndGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
