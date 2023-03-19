import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense, useEffect } from 'react';

import { useScroll } from '../lib/useScroll';

import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';

import {
  MainDocument,
  MainQuery,
} from '../graphql/main/main.generated';

import Home from '../components/home/Home';
import { LoaderPuff } from '../components/shared/loaders/Puff';

const About = dynamic(
  () => import('../components/about/About'),
  {
    suspense: true,
  }
);

const Projects = dynamic(
  () => import('../components/projects/Projects'),
  {
    suspense: true,
  }
);

const Contact = dynamic(
  () => import('../components/contact/Contact'),
  {
    suspense: true,
  }
);

type ScrollProps = {
  readonly scrollWithModal: boolean;
};

const HomeWrapperStyles = styled.div`
  ${(props: ScrollProps) =>
    !props.scrollWithModal && `overflow-y: scroll`};
  min-height: 100vh;

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const HomePage: NextPage<MainQuery> = ({
  main,
}: MainQuery ) => {
  
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  const { scrollWithModal } = useScroll();
  return (
    <>
      <Head>
        <title>
          {main?.data?.attributes?.meta_title! ||
            'David Hanenko'}
        </title>
        <meta
          name='description'
          content={
            main?.data?.attributes?.meta_description!
          }
        />
        <meta
          property='og:image'
          content={
            main?.data?.attributes?.og_image?.data
              ?.attributes?.url
          }
        />
      </Head>
      <HomeWrapperStyles scrollWithModal={scrollWithModal}>
        <Home main={main} />
        <Suspense fallback={<LoaderPuff />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoaderPuff />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<LoaderPuff />}>
          <Contact />
        </Suspense>
      </HomeWrapperStyles>
    </>
  );
};

export const getStaticProps = async (
  ctx: GetStaticProps
) => {
  const client = initializeApollo({});

  const {
    data: { main },
  } = await client.query<MainQuery>({
    query: MainDocument,
  });
  return addApolloState(client, {
    props: {
      main,
    },
  });
};

export default HomePage;
