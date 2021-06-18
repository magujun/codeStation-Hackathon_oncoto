import { createContext, ReactNode, useCallback, useState } from 'react';
import Router from 'next/router';

type Answers = {
  correctAnswer: string;
  userAnswer: string;
}

type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface GameContextData {
  answers: Answers;
  startTime: string;
  endTime: string;
  difficultyLevel: DifficultyLevel;
  handleStartNewGame: (difficultyLevelInput: DifficultyLevel) => void;
  handleEndGame: (time: string) => void;
  handleSubmitAnswer: () => void;
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

  const handleEndGame = useCallback((time: string) => {
    setEndTime(time)
  }, []);

  const handleSubmitAnswer = useCallback(() => {
    // TODO
  }, []);

  return (
    <GameContext.Provider value={{
      answers,
      difficultyLevel,
      endTime,
      startTime,
      handleStartNewGame,
      handleEndGame,
      handleSubmitAnswer
    }}>
      {children}
    </GameContext.Provider>
  );
}

