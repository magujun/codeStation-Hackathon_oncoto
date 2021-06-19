import { Button as ChakraUIButton, ButtonProps as ChakraUIButtonProps, Icon as ChakraUIIcon } from "@chakra-ui/react";
import { ReactNode, memo } from "react";
import { IconBaseProps } from "react-icons";

interface ButtonProps extends ChakraUIButtonProps {
  children: ReactNode;
  isPrimary?: boolean;
  icon?: React.ComponentType<IconBaseProps>;
}

export const Button = memo(({ children, icon: Icon, isPrimary = true, ...rest }: ButtonProps) => {
  if (!isPrimary) {
    return (
      <ChakraUIButton
        variant="unstyled"
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
        {Icon && (<ChakraUIIcon as={Icon} fontSize={{ base: "1rem", lg: "1.25rem" }} data-testid="button-icon" />)}
        {children}
      </ChakraUIButton>
    );
  }
  return (
    <ChakraUIButton
      variant="unstyled"
      bg="blue.900"
      color="white"
      _hover={{ filter: 'brightness(1.1)' }}
      w={{ base: "12.5rem", lg: "15.625rem" }}
      h="3.375rem"
      fontSize="1.25rem"
      fontWeight="bold"
      {...rest}
    >
      {Icon && (<ChakraUIIcon as={Icon} fontSize={{ base: "1rem", lg: "1.25rem" }} data-testid="button-icon" />)}
      {children}
    </ChakraUIButton>
  );
});

