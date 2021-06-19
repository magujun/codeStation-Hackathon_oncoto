import React from 'react';
import Link from 'next/link';
import { Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export type ActiveLinkProps = {
  href: string;
  text: string;
};

export const ActiveLink = ({ href, text }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const isActive = asPath.includes(href);
  console.log(asPath);

  return (
    <Box
      height="100%"
      pt={isActive ? '2px' : '0px'}
      borderBottom={isActive ? '2px solid' : ''}
      borderColor="blue.800"
      display="flex"
      alignItems="center"
      justifyContent="center"
      _hover={{
        color: 'blue.800',
        transition: 'color 0.5s',
      }}
    >
      <Link href={href} passHref>
        <Text as="a" fontWeight="500">
          {text}
        </Text>
      </Link>
    </Box>
  );
};
