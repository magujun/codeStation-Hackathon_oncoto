import React from 'react';
import Head from 'next/head';
import { Sidebar } from '../../components/Sidebar';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { Container } from '../../components/Layout/Container';

const Instructions = () => {
  return (
    <div>
      <Head>
        <title>oncoto | Instruções</title>
      </Head>
      <main>
        <Container mt="4">Instruções</Container>
      </main>
    </div>
  );
};

export default Instructions;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    return {
      props: {},
    };
  },
);
