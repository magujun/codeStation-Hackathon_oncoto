import React from 'react';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/client';
import { IoExitOutline } from 'react-icons/io5';
import { Avatar } from '../Avatar';

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  const [session] = useSession();
  const userNameInitialLetter = session?.user?.name.split(' ')[0] ?? '';

  const handleSignOutClick = () => {
    signOut();
  }

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text userSelect='none'>{userNameInitialLetter}</Text>
        </Box>
      )}

      <Avatar altText={session?.user.name} firstNameInitialLetter={userNameInitialLetter} imgUrl={session?.user.image} />


      <IconButton
        variant="unstyled"
        ml="3"
        fontSize="1.5rem"
        icon={<IoExitOutline />}
        label="Sair"
        aria-label="Exit"
        onClick={handleSignOutClick}
        display='inline-flex'
        _hover={{
          color: 'blue.800',
          transition: 'color 0.2s'
        }}
      />
    </Flex>
  );
};
