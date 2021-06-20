import React from 'react';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { withSSRAuth } from '../../utils/withSSRAuth';
import { Container } from '../../components/Layout/Container';
import { getPrismicClient } from '../../services/prismic';
import { RichText } from 'prismic-dom';
import { Text, Box } from '@chakra-ui/react';

type Guide = {
  content: string;
};

interface InstructionsProps {
  guide: Guide;
}

const Instructions = ({ guide }: InstructionsProps) => {
  return (
    <div>
      <Head>
        <title>oncoto? | Instruções</title>
      </Head>
      <main>
        <Container mt="4">
          <Box as="article">
            <Text fontSize="4xl" fontWeight={500}>
              Instruções
            </Text>
            <Box
              className="instructionsContent"
              lineHeight="2rem"
              fontSize="1.125rem"
              margin="2rem auto 0"
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
    const { req } = context;

    const prismic = getPrismicClient(req);

    const response = await prismic.getByUID('instructions', 'guide', {});

    const guide = {
      content: RichText.asHtml(response.data.content),
    };

    return {
      props: {
        guide,
      },
    };
  },
);
