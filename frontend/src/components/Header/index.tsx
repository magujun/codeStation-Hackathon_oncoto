import {
  Flex,
  IconButton,
  Icon,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebar } from '../../hook/useSidebar';
import { Container } from '../Layout/Container';
import { Logo } from './Logo';
import { PagesNav } from './PagesNav';
import { Profile } from './Profile';

export function Header() {
  const { onOpen } = useSidebar();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    // numero em string fica no formato de espaçamento
    <Flex
      w="100%"
      as="header"
      top={0}
      h="20"
      mx="auto"
      align="center"
      boxShadow="-webkit-box-shadow: 0px 11px 18px 2px rgba(96,169,236,0.1);box-shadow: 0px 11px 18px 2px rgba(96,169,236,0.1);"
      mb="4"
      bg="white"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        />
      )}
      <Container py="0" height="100%">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height="100%"
        >
          <Logo />
          {isWideVersion && <PagesNav />}
          <Profile showProfileData={isWideVersion} />
        </Box>
      </Container>
    </Flex>
  );
}
