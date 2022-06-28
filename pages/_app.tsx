import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../graphql/apollo';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Page } from '../components/layout/Page';
import { AnimationStateProvider } from '../lib/useAnimation';
import { ScrollProvider } from '../lib/useScroll';

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <ScrollProvider>
        <ParallaxProvider>
          <AnimationStateProvider>
            <Page>
              <Component {...pageProps} />
            </Page>
          </AnimationStateProvider>
        </ParallaxProvider>
      </ScrollProvider>
    </ApolloProvider>
  );
}

export default MyApp;
