import { Button as ChakraUIButton, ButtonProps as ChakraUIButtonProps } from "@chakra-ui/react";
import { ReactNode, memo } from "react";

interface ButtonProps extends ChakraUIButtonProps {
  children: ReactNode;
  isPrimary?: boolean;
}

export const Button = memo(({ children, isPrimary = true, ...rest }: ButtonProps) => {
  if (!isPrimary) {
    return (
      <ChakraUIButton
        variant="outline"
        bg="transparent"
        color="blue.900"
        borderColor="blue.900"
        borderWidth={1}
        _hover={{ backgroundColor: 'blue.900', color: 'white' }}
        w={{ base: "12.5rem", lg: "15.625rem" }}
        h="3.375rem"
        fontSize="1.25rem"
        fontWeight="bold"
        {...rest}
      >
        {children}
      </ChakraUIButton>
    );
  }
  return (
    <ChakraUIButton
      variant="solid"
      bg="blue.900"
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

