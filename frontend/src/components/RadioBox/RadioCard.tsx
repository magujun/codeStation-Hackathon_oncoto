import { Box, useRadio, RadioProps, Text, useBreakpointValue } from "@chakra-ui/react";
import Image from 'next/image';

interface RadioCardProps extends RadioProps {
  children: string;
}

export function RadioCard(props: RadioCardProps) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const isTabletOrWiderScreen = useBreakpointValue({
    base: false,
    md: true,
  })

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        width={{ base: "auto", sm: "40" }}
        height={{ base: "4.5rem", sm: "9.7rem" }}
        borderWidth="1px"
        borderRadius="40px"
        boxShadow="md"
        position="relative"
        _checked={{
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        tabIndex={0}
      >
        {isTabletOrWiderScreen ? (
          <Image src={`/images/${props.children}.svg`} width={480} height={465} objectFit="fill" />
        ) : (
          <Image src={`/images/${props.children}.svg`} width={480} height={465} objectFit="fill" />
        )}

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
