import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import styled from 'styled-components';

import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';
import { useScroll } from '../lib/useScroll';

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

type SnapScrollProps = {
  readonly scrollWithModal: boolean;
};

const SnapScrollWrapper = styled.div`
  scroll-snap-type: y proximity;
  ${(props: SnapScrollProps) =>
    !props.scrollWithModal && `overflow-y: scroll`};
  height: 100vh;

  @media (max-width: 576px) {
    scroll-snap-type: none;
  }
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const HomePage: NextPage<MainQuery> = ({
  main,
}: MainQuery) => {
  const { scrollWithModal } = useScroll();

  return (
    <>
      <Head>
        <title>David Hanenko</title>
        <meta
          name='description'
          content={
            main?.data?.attributes?.meta_description!
          }
        />
      </Head>
      <SnapScrollWrapper scrollWithModal={scrollWithModal}>
        <Home main={main} />
        <Suspense fallback={<LoaderPuff />}>
          <About />
        </Suspense>
        <Suspense fallback={<LoaderPuff />}>
          <Projects projects={{
            __typename: undefined,
            projects: undefined
          }} experiments={{
            __typename: undefined,
            experiments: undefined
          }} />
        </Suspense>
        <Suspense fallback={<LoaderPuff />}>
          <Contact />
        </Suspense>
      </SnapScrollWrapper>
    </>
  );
};

export const getStaticProps = async (
  ctx: GetStaticProps
) => {
  const client = initializeApollo({
  });

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
