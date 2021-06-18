import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ContainerProps extends FlexProps {
  children: ReactNode;
}

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <Flex
      as="section"
      px="2.6875rem"
      w="100%"
      justifyContent="flex-start"
      alignItems="center"
      {...rest}
    >
      <Flex
        h="100%"
        w="100%"
        mx="auto"
        maxWidth={1480}
        direction="column"
      >
        {children}
      </Flex>
    </Flex>
  )
}
