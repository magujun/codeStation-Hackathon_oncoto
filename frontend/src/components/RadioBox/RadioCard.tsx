import { memo } from 'react';
import { Box, useRadio, RadioProps, Text } from "@chakra-ui/react";
import Image from 'next/image';

interface RadioCardProps extends RadioProps {
  children: string;
}

function RadioCardComponent(props: RadioCardProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        width="40"
        height="9.7rem"
        borderWidth="3px"
        borderRadius="42px"
        boxShadow="md"
        position="relative"
        _checked={{
          borderColor: "red.500"
        }}
        _focus={{
          boxShadow: "outline",
        }}
        tabIndex={0}
      >

        <Image src={`/images/${props.children}.svg`} width={480} height={465} objectFit="fill" />

        <Box
          position="absolute"
          bottom="0"
          left="50%"
          transform="translateX(-50%)"
        >
          <Text
            fontFamily="Exo"
            fontStyle="italic"
            fontSize="1.5rem"
            fontWeight="800"
            textTransform="capitalize"
            textColor="red.500"
          >
            {props.children}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export const RadioCard = memo(RadioCardComponent);
