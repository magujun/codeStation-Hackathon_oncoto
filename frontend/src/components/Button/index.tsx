import { Button as ChakraUIButton, ButtonProps as ChakraUIButtonProps } from "@chakra-ui/react";
import { ReactNode, memo } from "react";

interface ButtonProps extends ChakraUIButtonProps {
  children: ReactNode;
}

export const Button = memo(({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraUIButton
      variant="solid"
      bg="blue.800"
      color="white"
      _hover={{ filter: 'brightness(1.1)' }}
      w={{ base: "12.5rem", lg: "15.625rem" }}
      h="3.375rem"
      fontSize="1.25rem"
      fontWeight="bold"
      {...rest}
    >
      {children}
    </ChakraUIButton>
  );
});

