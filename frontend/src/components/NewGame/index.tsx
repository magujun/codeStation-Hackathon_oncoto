import { VStack, Text, Box, ResponsiveValue } from "@chakra-ui/react";
import { Button } from "../Button";
import { RadioBox } from "../RadioBox";
import { BiWorld } from 'react-icons/bi';
import { useState } from "react";
import { useGameData } from "../../hook/useGameData";

type difficultyLevel = "easy" | "medium" | "hard";

interface NewGameProps {
  alignSelfTitle?: string;
  textAlignTitle?: "start" | "center" | "end";
}

export function NewGame({ alignSelfTitle = "flex-start", textAlignTitle = "start" }: NewGameProps) {
  const [difficultyLevel, setDifficultyLevel] = useState<difficultyLevel>("easy");

  const { onStartNewGame } = useGameData();

  return (
    <VStack
      width="100%"
      spacing="8"
      py="8"
      px="10"
    >
      <Text fontSize={{ base: "md", sm: "lg", md: "2xl" }} textAlign={textAlignTitle} fontWeight={700} alignSelf={alignSelfTitle}>
        Escolha um nível de dificuldade <br />
        e inicie um novo jogo:
      </Text>
      <Box position="relative" width={{ base: '12.5rem', sm: '100%', md: '100%', lg: '100%' }} maxWidth={{ sm: '22rem', md: '32rem', lg: '38rem' }}>
        <RadioBox onChangeDifficultyLevel={setDifficultyLevel} />
      </Box>
      <Button leftIcon={<BiWorld />} onClick={() => onStartNewGame(difficultyLevel)}>Novo Jogo</Button>
    </VStack>
  );
}
