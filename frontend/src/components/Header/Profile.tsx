import React from 'react';
import { Avatar, Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/client';
import { IoExitOutline } from 'react-icons/io5';

interface ProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  const [session] = useSession();
  const userName = session?.user?.name.split(' ')[0] ?? '';

  const handleSignOutClick = () => {
    signOut();
  }

  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{userName}</Text>
        </Box>
      )}

      <Avatar size="md" name={userName} src={session?.user.image ?? ''} />

      <IconButton
        variant="ghost"
        ml="3"
        icon={<IoExitOutline />}
        label="Sair"
        aria-label="Exit"
        onClick={handleSignOutClick}
      />
    </Flex>
  );
};
