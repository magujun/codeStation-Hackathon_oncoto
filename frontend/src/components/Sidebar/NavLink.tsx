import React from 'react';
import Link from 'next/link';
import {
  Text,
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

type NavLinkProps = {
  children: string;
  href: string;
} & ChakraLinkProps;

export function NavLink({ children, href, ...props }: NavLinkProps) {
  const { asPath } = useRouter();
  const isActive = asPath === href;

  return (
    <Link href={href} passHref>
      <ChakraLink {...props} display="flex" align="center">
        <Text fontWeight={isActive ? "bold" : "medium"} textDecoration={isActive ? 'underline' : ''} color={isActive && 'blue.800'}>
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
}
