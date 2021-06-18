import { createContext, ReactNode, useCallback, useState } from 'react';
import Router from 'next/router';

type GeoPoint = {
  lat: number;
  long: number;
}

type EndGameInput = {
  goalPoint: GeoPoint;
  guessPoint: GeoPoint;
  endGameTime: Date;
}

type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface GameContextData {
  userGuessPoint: GeoPoint;
  userGoalPoint: GeoPoint;
  startTime: Date;
  endTime: Date;
  difficultyLevel: DifficultyLevel;
  handleStartNewGame: (difficultyLevelInput: DifficultyLevel) => void;
  handleEndGame: (endGameInput: EndGameInput) => void;
  handleStartTime: (time: Date) => void;
}

interface GameProviderProps {
  children: ReactNode;
}

export const GameContext = createContext({} as GameContextData);

export function GameProvider({ children }: GameProviderProps) {
  const [userGuessPoint, setUserGuessPoint] = useState<GeoPoint>(null);
  const [userGoalPoint, setUserGoalPoint] = useState<GeoPoint>(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [difficultyLevel, setDifficultyLevel] = useState<DifficultyLevel>('easy');

  const handleStartTime = useCallback((time: Date) => {
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

