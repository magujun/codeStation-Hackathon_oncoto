import React from 'react';
import { Image, useBreakpointValue } from '@chakra-ui/react';

export const Logo = () => {
  const isBase = useBreakpointValue({
    base: true,
    sm: false
  });

  return (
    <>
      {isBase ? (
        <Image src="/images/logo-short.svg" alt="logo" height="2.25rem" />
      ) : (
        <Image src="/images/logo-full.svg" alt="logo" height="2.25rem" />
      )}
    </>
  );
}
