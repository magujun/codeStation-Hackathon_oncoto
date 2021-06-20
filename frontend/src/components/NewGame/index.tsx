import { VStack, Text, Box } from "@chakra-ui/react";
import { Button } from "../Button";
import { RadioBox } from "../RadioBox";
import { BiWorld } from 'react-icons/bi';
import { useState } from "react";
import { useGameData } from "../../hook/useGameData";

type difficultyLevel = "easy" | "medium" | "hard";

export function NewGame() {
  const [difficultyLevel, setDifficultyLevel] = useState<difficultyLevel>("easy");

  const { onStartNewGame } = useGameData();

  return (
    <VStack
      width="100%"
      spacing="8"
      py="8"
      px="10"
      backgroundColor="rgba(255, 255, 255, 0.85)"
      borderColor="rgba(159, 209, 255, 0.2);"
      borderWidth="1px"
      borderStyle="solid"
      borderRadius="2rem"
      boxShadow="4px 10px 30px rgba(159, 209, 255, 0.1);"
    >
      <Text fontSize={{ base: "md", sm: "lg", md: "2xl" }} fontWeight={700} alignSelf="flex-start">
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
