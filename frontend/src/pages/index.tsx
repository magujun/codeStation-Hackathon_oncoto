import React from 'react';
import Head from 'next/head';
import { getSession, signIn } from 'next-auth/client';
import { Box, Stack, Text } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import { Logo } from '../components/Logo';
import { GetServerSideProps } from 'next';
import { Button } from '../components/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>oncoto? </title>
      </Head>
      <main>
        <Box
          width="100%"
          height="100vh"
          bg="linear-gradient(243.26deg, #4997de 11.26%, #2BB4D3 99.35%);"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={{ base: '6', md: '8' }}
        >
          <Box
            width={500}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
          >
            <Stack spacing="10" alignItems="center" justifyContent="center">
              <Logo />
              <Text fontWeight="bold" fontSize={{ base: "1.25rem", md: "1.5rem" }} color="white.200">
                Comece a explorar
              </Text>
              <Button
                bg="white.200"
                w="100%"
                color="blue.800"
                onClick={() => signIn('google')}
                rightIcon={<FaGoogle />}
              >
                Entre para jogar
              </Button>
            </Stack>
          </Box>
        </Box>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  if (session?.user) {
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
