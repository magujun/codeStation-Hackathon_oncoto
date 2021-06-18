import { createContext, ReactNode, useCallback, useState } from 'react';

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
  handleStartNewGame: () => void;
  handleEndGame: () => void;
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

  const handleStartNewGame = useCallback((difficultyLevelInput: DifficultyLevel) => {
    // TODO
  }, []);

  const handleEndGame = useCallback(() => {
    // TODO
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
