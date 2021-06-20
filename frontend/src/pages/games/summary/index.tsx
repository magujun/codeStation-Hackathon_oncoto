import React, { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Sidebar } from '../../../components/Sidebar';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '../../../utils/withSSRAuth';
import { useGameData } from '../../../hook/useGameData';
import { Container } from '../../../components/Layout/Container';

const History = () => {
  const { push } = useRouter();
  const { userGoalPoint, userGuessPoint, elapsedTime, distance, score } =
    useGameData();

  useEffect(() => {
    if (!score) {
      push('/dashboard');
    }
  }, []);

  console.log(score, userGoalPoint, userGuessPoint, elapsedTime, distance);

  return (
    <div>
      <Head>
        <title>oncoto | History</title>
      </Head>
      <main>
        <Container mt="4">
          History
          {score}
        </Container>
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
