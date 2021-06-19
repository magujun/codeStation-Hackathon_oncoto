import React from 'react';
import Head from 'next/head';
import { Sidebar } from '../../components/Sidebar';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '../../utils/withSSRAuth';

const Game = () => {
  return (
    <div>
      <Head>
        <title>oncoto | Game</title>
      </Head>
      <main>
        <Sidebar />
        Game
      </main>
    </div>
  );
};

export default Game;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    return {
      props: {},
    };
  },
);
