import React from 'react';
import { Flex, IconButton, Icon, HStack } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useSession } from 'next-auth/client';

import { RiMenuLine } from 'react-icons/ri';
import { useSidebar } from '../../hook/useSidebar';
import { Container } from '../Layout/Container';
import { Logo } from './Logo';
import { PagesNav } from './PagesNav';
import { Profile } from './Profile';

export function Header() {
  const [session] = useSession();
  const { onOpen } = useSidebar();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (!session?.user?.email) {
    return (<Flex />);
  }

  return (
    <Flex
      w="100%"
      as="header"
      top={0}
      h="20"
      mx="auto"
      align="center"
      boxShadow="-webkit-box-shadow: 0px 11px 18px 2px rgba(96,169,236,0.1);box-shadow: 0px 11px 18px 2px rgba(96,169,236,0.1);"
      bg="white"
    >
      <Container py="0" height="100%">
        <Flex alignItems="center" justifyContent="space-between" height="100%">
          <HStack spacing="4">
            <Logo />
            {!isWideVersion && (
              <IconButton
                aria-label="Open navigation"
                icon={<Icon as={RiMenuLine} />}
                fontSize="24"
                variant="unstyled"
                onClick={onOpen}
              />
            )}
          </HStack>
          {isWideVersion && <PagesNav />}
          <Profile showProfileData={isWideVersion} />
        </Flex>
      </Container>
    </Flex>
  );
}
