import React from 'react';
import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { SidebarProvider } from '../context/SidebarContext';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { GameProvider } from '../context/GameContext';

function MyApp({ Component, pageProps }) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <GameProvider>
          <SidebarProvider>
            <>
              <Header />
              <Sidebar />
              <Component {...pageProps} />
            </>
          </SidebarProvider>
        </GameProvider>
      </ChakraProvider>
    </NextAuthProvider>
  );
}

export default MyApp;
