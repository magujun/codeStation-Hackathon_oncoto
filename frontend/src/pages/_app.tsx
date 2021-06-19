import React from 'react';
import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { SidebarProvider } from '../context/SidebarContext';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  const isHome = Component.name === 'Home';

  return (
    <ChakraProvider theme={theme}>
      <SidebarProvider>
        <>
          {!isHome && <Header />}
          <Sidebar />
          <Component {...pageProps} />
        </>
      </SidebarProvider>
    </ChakraProvider>
  );
}

export default MyApp;
