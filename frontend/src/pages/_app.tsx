import React from 'react';
import { theme } from '../styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClientProvider } from "react-query";
import { Provider as NextAuthProvider } from 'next-auth/client';
import { queryClient } from "../services/queryClient";
import { SidebarProvider } from '../context/SidebarContext';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

function MyApp({ Component, pageProps }) {
  const isHome = Component.name === 'Home';

  return (
    <QueryClientProvider client={queryClient}>
      <NextAuthProvider session={pageProps.session}>
        <ChakraProvider theme={theme}>
          <SidebarProvider>
            <>
              {!isHome && <Header />}
              <Sidebar />
              <Component {...pageProps} />
            </>
          </SidebarProvider>
        </ChakraProvider>
      </NextAuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
