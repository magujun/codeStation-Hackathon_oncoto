import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { Container } from '../../components/Layout/Container';
import { getPrismicClient } from '../../services/prismic';
import { RichText } from "prismic-dom";
import { Text, Box } from '@chakra-ui/react';

type Guide = {
  content: string;
}

interface InstructionsProps {
  guide: Guide;
}

const Instructions = ({ guide }: InstructionsProps) => {
  return (
    <div>
      <Head>
        <title>oncoto | Instruções</title>
      </Head>
      <main>
        <Container mt="4">
          <Box
            as="article"
            maxWidth="45rem"
            margin="5rem auto 0"
          >
            <Text fontSize="4xl" fontWeight={500}>
              Instructions
            </Text>
            <Box
              className="instructionsContent"
              lineHeight="2rem"
              fontSize="1.125rem"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Instructions;

export const getServerSideProps: GetServerSideProps = withSSRAuth(
  async context => {
    const prismic = getPrismicClient();

    const response = await prismic.getByUID('content', 'instructions', {});

    const guide = {
      content: RichText.asHtml(response.data.content)
    }

    return {
      props: {
        guide
      },
    };
  },
);
