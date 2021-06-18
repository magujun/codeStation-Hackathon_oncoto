import React from 'react';
import Head from 'next/head';
import { getSession, signIn } from 'next-auth/client';
import { Box, Button, Stack, Text } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import Logo from '../components/Logo';
import Card from '../components/Card';
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
          height={500}
          bgColor="blue.200"
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
            <Stack spacing="20" alignItems="center" justifyContent="center">
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
                Entre para jogar
              </Button>
            </Stack>
          </Box>
        </Box>
        <Stack
          direction={['column', 'column', 'column', 'row']}
          mt={100}
          spacing={20}
        >
          <Card text="Escolha um nível" image="" />
          <Card text="Viaje pelo mundo" image="" />
          <Card text="Esteja entre os 50 melhores" image="" />
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
    }
  }

  return {
    props: {},
  };
};
