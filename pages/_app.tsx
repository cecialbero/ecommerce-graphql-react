import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

import '../styles/global.css';


const client = new ApolloClient({
  uri: 'http://localhost:3000/shop-api',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
