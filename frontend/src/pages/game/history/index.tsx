import React from 'react';
import Head from 'next/head';
import { Sidebar } from '../../../components/Sidebar';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '../../../utils/withSSRAuth';

const History = () => {
  return (
    <div>
      <Head>
        <title>oncoto | History</title>
      </Head>
      <main>
        History
        <Sidebar />
      </main>
    </div>
  );
};

export default History;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    return {
      props: {},
    };
  },
);
