import { createContext, ReactNode, useCallback, useState } from 'react';
import Router from 'next/router';

type Answers = {
  correctAnswer: string;
  userAnswer: string;
}

type EndGameInput = {
  answers: Answers;
  countdownTime?: string;
}

type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface GameContextData {
  answers: Answers;
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
  const [answers, setAnswers] = useState<Answers>(null);
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
    const currentTime = endGameInput.countdownTime ?? JSON.stringify(new Date());
    setEndTime(currentTime);

    // Calculate lapsed time

    // API POST

    // Redirect to '/summary'

  }, []);

  return (
    <GameContext.Provider value={{
      answers,
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

