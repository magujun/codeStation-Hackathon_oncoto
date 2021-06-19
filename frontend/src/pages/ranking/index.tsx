import React from 'react';
import Head from 'next/head';
import { Sidebar } from '../../components/Sidebar';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '../../utils/withSSRAuth';

const Ranking = () => {
  return (
    <div>
      <Head>
        <title>oncoto | Ranking</title>
      </Head>
      <main>
        Ranking
        <Sidebar />
      </main>
    </div>

  );
}

export default Ranking;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    return {
      props: {},
    };
  },
);
