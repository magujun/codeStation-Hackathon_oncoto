import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/client';
import { Button, Container, Heading, Stack, Text } from '@chakra-ui/react';

function Login() {
  const [session, loading] = useSession();

  console.log(session);

  if (session) {
    return (
      <Stack spacing={8}>
        <Text>Signed in as {session.user.email}</Text>
        <Button
          bg="blue.800"
          color="white"
          _hover={{
            color: 'blue.800',
            bg: 'white',
            borderColor: 'blue.800',
            border: '1px solid',
          }}
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </Stack>
    );
  }
  return (
    <Stack spacing={8}>
      <Text>Not signed in</Text>
      <Button
        bg="blue.800"
        color="white"
        _hover={{
          color: 'blue.800',
          bg: 'white',
          borderColor: 'blue.800',
          border: '1px solid',
        }}
        onClick={() => signIn('google')}
      >
        Sign in
      </Button>
    </Stack>
  );
}

export default function Home() {
  return (
    <Container>
      <Stack spacing={8}>
        <Heading>oncoto</Heading>
        <Login />
      </Stack>
    </Container>
  );
}
