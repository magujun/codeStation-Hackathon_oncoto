import { useRadioGroup, Stack } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { RadioCard } from './RadioCard';

export function RadioBox() {
  const options = ["easy", "medium", "hard"];
  const [active, setActive] = useState("easy");

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "difficultyLevel",
    defaultValue: "easy",
    onChange: setActive,
  });

  useEffect(() => { console.log(active) }, [active])

  const group = getRootProps()

  return (
    <Stack
      spacing={{ base: "4", md: "8", lg: "16" }}
      flexDirection={{ base: "column", sm: "row" }}
      {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </Stack>
  )
}
