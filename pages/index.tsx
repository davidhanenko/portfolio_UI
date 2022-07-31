import { GetServerSidePropsContext, NextPage } from 'next';
import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';
import styled from 'styled-components';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import {
  MainDocument,
  MainQuery,
  useMainQuery,
} from '../graphql/main/main.generated';

import Home from '../components/home/Home';

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

import { useScroll } from '../lib/useScroll';
import Head from 'next/head';

type SnapScrollProps = {
  readonly scrollWithModal: boolean;
};

const SnapScrollWrapper = styled.div`
  scroll-snap-type: y mandatory;
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
  const { data, loading, error } = useMainQuery();

  const { scrollWithModal } = useScroll();

  if (loading) return <h4>Loading...</h4>;

  return (
    <>
      <Head>
        <title>David Hanenko</title>
      </Head>
      <SnapScrollWrapper scrollWithModal={scrollWithModal}>
        <Home main={main} />
        <Suspense fallback={`Loading...`}>
          <About />
        </Suspense>
        <Suspense fallback={`Loading...`}>
          <Projects />
        </Suspense>
        <Suspense fallback={`Loading...`}>
          <Contact />
        </Suspense>
      </SnapScrollWrapper>
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
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
