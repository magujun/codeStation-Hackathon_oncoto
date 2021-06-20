import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ColorModeScript } from "@chakra-ui/react";
import { theme } from '../styles/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main/>
          <NextScript />
        </body>
      </Html>
    );
  }
}
