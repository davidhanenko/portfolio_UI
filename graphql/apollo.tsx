import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from '@apollo/client';
import { PropsWithChildren } from 'react';
import { DEV_ENDPOINT, PROD_ENDPOINT } from '../config';

const StrapiApolloProvider: React.FC<
  PropsWithChildren<{}>
> = ({ children }) => {
  const client = new ApolloClient({
    uri:
      process.env.NODE_ENV === 'development'
        ? DEV_ENDPOINT
        : PROD_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
};

export default StrapiApolloProvider;
