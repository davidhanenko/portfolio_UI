import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../graphql/apollo';
import smoothscroll from 'smoothscroll-polyfill';
import { Page } from '../components/layout/Page';
import { AnimationStateProvider } from '../lib/useAnimation';
import { ScrollProvider } from '../lib/useScroll';

// smoothscroll polyfill - safari
if (typeof window !== 'undefined') {
  smoothscroll.polyfill();
  window.__forceSmoothScrollPolyfill__ = true;
}

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
