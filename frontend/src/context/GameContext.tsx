import { ReactNode, useCallback, useState } from 'react';
import Router from 'next/router';
import { getFormatedElapsedTime } from '../utils/getFormatedElapsedTime';
import { createContext } from 'use-context-selector';
// import { api } from '../services/api';

type GeoPoint = {
  lat: number;
  long: number;
}

type EndGameInput = {
  goalPoint: GeoPoint;
  guessPoint: GeoPoint | undefined;
  endGameTime: Date;
}

type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface GameContextData {
  userGuessPoint: GeoPoint;
  userGoalPoint: GeoPoint;
  startTime: Date;
  endTime: Date;
  difficultyLevel: DifficultyLevel;
  elapsedTime: string;
  distance: number;
  handleStartNewGame: (difficultyLevelInput: DifficultyLevel) => void;
  handleEndGame: (endGameInput: EndGameInput) => void;
  handleStartTime: (time: Date) => void;
}

interface GameProviderProps {
  children: ReactNode;
}

export const GameContext = createContext<GameContextData>({} as GameContextData);

export function GameProvider({ children }: GameProviderProps) {
  const [userGuessPoint, setUserGuessPoint] = useState<GeoPoint>(null);
  const [userGoalPoint, setUserGoalPoint] = useState<GeoPoint>(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState('');
  const [distance, setDistance] = useState(0);
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>('easy');

  const handleStartTime = useCallback((time: Date) => {
    setStartTime(time);
  }, []);

  const handleStartNewGame = useCallback((difficultyLevelInput: DifficultyLevel) => {
    setDifficultyLevel(difficultyLevelInput);
    Router.push('/games');
  }, []);

  const handleEndGame = useCallback(async (endGameInput: EndGameInput) => {
    const { endGameTime, guessPoint, goalPoint } = endGameInput;

    setEndTime(endGameTime);
    setUserGoalPoint(goalPoint);

    if (guessPoint) {
      setUserGuessPoint(guessPoint);
    }

    const formatedElapsedTime = getFormatedElapsedTime(startTime, endGameTime);

    setElapsedTime(formatedElapsedTime);

    const data = {
      playerId: '', // TO-DO
      level: difficultyLevel,
      elapsedTime: formatedElapsedTime,
      locationOrigin: String(goalPoint),
      locationMarked: guessPoint ? String(guessPoint) : '',
      distance: '', // TO-DO
      score: '' // TO-DO
    }

    // await api.post('/games', data);

    Router.push('/game-summary');
  }, [startTime, difficultyLevel]);

  return (
    <GameContext.Provider value={{
      distance,
      elapsedTime,
      userGoalPoint,
      userGuessPoint,
      difficultyLevel,
      endTime,
      startTime,
      handleStartTime,
      handleStartNewGame,
      handleEndGame
    }}>
      {children}
    </GameContext.Provider>
  );
}

