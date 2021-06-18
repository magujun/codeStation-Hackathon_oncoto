import { useContextSelector } from 'use-context-selector';
import { GameContext } from "../context/GameContext";

export function useGameData() {
  const difficultyLevel = useContextSelector(GameContext, gamedata => gamedata.difficultyLevel);
  const distance = useContextSelector(GameContext, gamedata => gamedata.distance);
  const endTime = useContextSelector(GameContext, gamedata => gamedata.endTime);
  const startTime = useContextSelector(GameContext, gamedata => gamedata.startTime);
  const userGoalPoint = useContextSelector(GameContext, gamedata => gamedata.userGoalPoint);
  const userGuessPoint = useContextSelector(GameContext, gamedata => gamedata.userGuessPoint);
  const elapsedTime = useContextSelector(GameContext, gamedata => gamedata.elapsedTime);
  const onStartTime = useContextSelector(GameContext, gamedata => gamedata.handleStartTime);
  const onStartNewGame = useContextSelector(GameContext, gamedata => gamedata.handleStartNewGame);
  const onEndGame = useContextSelector(GameContext, gamedata => gamedata.handleEndGame);

  return {
    difficultyLevel,
    distance,
    endTime,
    startTime,
    userGoalPoint,
    userGuessPoint,
    elapsedTime,
    onStartTime,
    onStartNewGame,
    onEndGame
  };
}
