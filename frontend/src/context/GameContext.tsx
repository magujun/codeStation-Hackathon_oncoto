import { createContext, ReactNode, useCallback, useState } from 'react';

type Answers = {
  correctAnswer: string;
  userAnswer: string;
}

export interface GameContextData {
  answers: Answers;
  startTime: string;
  endTime: string;
  difficultyLevel: string;
  handleStartNewGame: () => void;
  handleEndGame: () => void;
  handleSubmitAnswer: () => void;
}

interface GameProviderProps {
  children: ReactNode;
}

export const GameContext = createContext({} as GameContextData);

export function GameProvider({ children }) {
  const [answers, setAnswers] = useState<Answers>(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');

  const handleStartNewGame = useCallback(() => {
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

