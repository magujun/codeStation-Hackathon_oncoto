import React from 'react';
import Head from 'next/head';
import { Sidebar } from '../../components/Sidebar';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '../../utils/withSSRAuth';

const Instructions = () => {
  return (
    <div>
      <Head>
        <title>oncoto | Instruções</title>
      </Head>
      <main>
        Instruções
        <Sidebar />
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
