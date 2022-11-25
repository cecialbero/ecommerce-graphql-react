import type { AppProps } from 'next/app'
import Head from 'next/head'
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'
import { Provider } from 'react-redux'

import store from '../store'

import '../styles/global.css'

const commerceLink = createHttpLink({
  uri: 'http://localhost:3000/shop-api',
  headers: {
    authorization: typeof window !== 'undefined' && localStorage.getItem('Auth-Token')
      ? `Bearer ${localStorage.getItem('Auth-Token')}`
      : '',
  },
});

const afterwareLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    const context = operation.getContext();
    const authHeader = context.response.headers.get('Vendure-Auth-Token');

    if (authHeader && typeof window !== 'undefined') {
      localStorage.setItem('Auth-Token', authHeader);
    }
    return response;
  });
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([afterwareLink, commerceLink]),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
    <Provider store={store}>
      <Head>
          <title>Shop App</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
    </ApolloProvider>
  )
}

export default MyApp
