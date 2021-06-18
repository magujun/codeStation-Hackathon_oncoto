import { createContext, ReactNode, useCallback, useState } from 'react';
import Router from 'next/router';

type GeoPoint = {
  lat: number;
  long: number;
}

type EndGameInput = {
  goalPoint: GeoPoint;
  guessPoint: GeoPoint;
  endGameTime: string;
}

type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface GameContextData {
  userGuessPoint: GeoPoint;
  userGoalPoint: GeoPoint;
  startTime: string;
  endTime: string;
  difficultyLevel: DifficultyLevel;
  handleStartNewGame: (difficultyLevelInput: DifficultyLevel) => void;
  handleEndGame: (endGameInput: EndGameInput) => void;
  handleStartTime: (time: string) => void;
}

interface GameProviderProps {
  children: ReactNode;
}

export const GameContext = createContext({} as GameContextData);

export function GameProvider({ children }: GameProviderProps) {
  const [userGuessPoint, setUserGuessPoint] = useState<GeoPoint>(null);
  const [userGoalPoint, setUserGoalPoint] = useState<GeoPoint>(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>('easy');

  const handleStartTime = useCallback((time: string) => {
    setStartTime(time)
  }, []);

  const handleStartNewGame = useCallback((difficultyLevelInput: DifficultyLevel) => {
    setDifficultyLevel(difficultyLevelInput);
    Router.push('/games');
  }, []);

  const handleEndGame = useCallback((endGameInput: EndGameInput) => {
    const { endGameTime, guessPoint, goalPoint } = endGameInput;
    setEndTime(endGameTime);
    setUserGoalPoint(goalPoint);
    setUserGuessPoint(guessPoint);
    // Calculate lapsed time

    // API POST

    // Redirect to '/summary'

  }, []);

  return (
    <GameContext.Provider value={{
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

