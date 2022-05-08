import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../graphql/apollo';
import { Page } from '../components/layout/Page';
import { AnimationStateProvider } from '../lib/useAnimation';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <AnimationStateProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </AnimationStateProvider>
    </ApolloProvider>
  );
}

export default MyApp;
