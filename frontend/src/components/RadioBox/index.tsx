import { useRadioGroup, HStack, useBreakpointValue } from "@chakra-ui/react"
import { Dispatch, SetStateAction } from "react";
import { RadioCard } from './RadioCard';
import OverflowWrapper from 'react-overflow-wrapper';

interface RadioBoxProps {
  onChangeDifficultyLevel: Dispatch<SetStateAction<string>>;
}

export function RadioBox({ onChangeDifficultyLevel }: RadioBoxProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    lg: true
  });

  const options = ["easy", "medium", "hard"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "difficultyLevel",
    defaultValue: "easy",
    onChange: onChangeDifficultyLevel,
  });

  const group = getRootProps()

  if (!isWideScreen) {
    return (
      <OverflowWrapper
        style={{ overflow: "hidden" }}
        iconWrapStyle={{
          left: {
            height: '100%',
            backgroundImage: 'linear-gradient(to right, hsl(0, 100%, 100%) 25%, hsla(0, 0%, 0%, 0))',
            left: '-1px'
          },
          right: {
            height: '100%',
            backgroundImage: 'linear-gradient(to left, hsl(0, 100%, 100%) 25%, hsla(0, 0%, 0%, 0))',
            right: '-1px',
          },
        }}
      >
        <HStack
          spacing="4"
          {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value })
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            )
          })}
        </HStack>
      </OverflowWrapper>
    )
  }

  return (
    <HStack
      spacing={{ md: "8", lg: "16" }}
      {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value })
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        )
      })}
    </HStack>
  )
}
