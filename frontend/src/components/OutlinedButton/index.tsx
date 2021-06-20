import { Button as ChakraUIButton, ButtonProps as ChakraUIButtonProps } from "@chakra-ui/react";
import { ReactNode, memo } from "react";

interface ButtonProps extends ChakraUIButtonProps {
  children: ReactNode;
}

export const OutlinedButton = memo(({ children, ...rest }: ButtonProps) => {
  return (
    <ChakraUIButton
      variant="outline"
      bg="transparent"
      color="blue.800"
      borderColor="blue.800"
      borderWidth={1}
      _hover={{ backgroundColor: 'blue.800', color: 'white' }}
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

