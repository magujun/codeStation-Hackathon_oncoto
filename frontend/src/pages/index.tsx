import React from 'react';
import Head from 'next/head';
import { getSession, signIn } from 'next-auth/client';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import { Logo } from '../components/Logo';
import { Card } from '../components/Card';
import { GetServerSideProps } from 'next';

export default function Home() {
  return (
    <div>
      <Head>
        <title>oncoto</title>
      </Head>
      <main>
        <Box
          width="100%"
          height="50vh"
          bg="blue.900"
          display="flex"
          alignItems="center"
          justifyContent="center"
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
              <Text fontWeight="bold" fontSize="1.5rem" color="white.200">
                Explore o mundo
              </Text>
              <Button
                size="lg"
                bg="white.200"
                w={400}
                color="blue.200"
                _hover={{
                  color: 'white.200',
                  bg: 'blue.200',
                  borderColor: 'white.200',
                  border: '1px solid',
                }}
                onClick={() => signIn('google')}
                rightIcon={<FaGoogle />}
              >
                ENTRE PARA JOGAR
              </Button>
            </Stack>
          </Box>
        </Box>
        <Stack
          direction={['column', 'column', 'column', 'row']}
          mt={50}
          spacing={20}
        >
          <Card text="Escolha um nível" image="/images/level.jpg" />
          <Card text="Viaje pelo mundo" image="/images/world.jpg" />
          <Card text="Esteja entre os 50 melhores" image="/images/winner.jpg" />
        </Stack>
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
