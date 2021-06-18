import { createContext } from 'react';

type Answers = {
  correctAnswer: string;
  userAnswer: string;
}

interface IGameContext {
  answers: Answers;
  startTime: string;
  endTime: string;
  difficultyLevel: string;
  handleStartNewGame: () => void;
  handleEndNewGame: () => void;
  handleSubmitAnswer: () => void;
}

export const GameContext = createContext({} as IGameContext);


