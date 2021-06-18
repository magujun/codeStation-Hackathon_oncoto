import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { signOut } from 'next-auth/client';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { Button } from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>oncoto | Dashboard</title>
      </Head>
      <main>
        Dashboard
        <Button onClick={() => signOut()}>Sair</Button>
      </main>
    </div>
  );
};

export default Dashboard;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    return {
      props: {},
    };
  },
);