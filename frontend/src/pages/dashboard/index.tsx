import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '../../utils/withSSRAuth';

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>oncoto | Dashboard</title>
      </Head>
      <main>
        Dashboard
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
