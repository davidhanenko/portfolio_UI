import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../graphql/apollo';
import { Page } from '../components/layout/Page';
import { AnimationStateProvider } from '../lib/useAnimation';
import { ScrollProvider } from '../lib/useScroll';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ScrollProvider>
          <AnimationStateProvider>
            <Page>
              <Component {...pageProps} />
            </Page>
          </AnimationStateProvider>
      </ScrollProvider>
    </ApolloProvider>
  );
}

export default MyApp;
