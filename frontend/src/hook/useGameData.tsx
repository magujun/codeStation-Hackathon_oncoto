import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export function useGameData() {
  const context = useContext(GameContext);

  if (!context) {
    throw Error('useGameData hook must be used within a GameContext');
  }

  return context;
}
