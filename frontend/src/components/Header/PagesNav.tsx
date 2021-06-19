import React from 'react';
import { HStack } from '@chakra-ui/react';
import { ActiveLink } from './ActiveLink';

export function PagesNav() {
  return (
    <HStack
      spacing={['6', '8']}
      mx={['6', '8']}
      pr={['6', '8']}
      height="100%"
      color="black.450"
    >
      <ActiveLink href="/dashboard" text="Dashboard" />
      <ActiveLink href="/ranking" text="Ranking" />
      <ActiveLink href="/instructions" text="Instruções" />
    </HStack>
  );
}
