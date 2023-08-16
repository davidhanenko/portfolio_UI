import { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';

import SingleProject from '../components/single-project/SingleProject';
import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';
import {
  SingleProjectDocument,
  SingleProjectQuery,
} from '../graphql/projects/singleProject.generated';

const SingleProjectPage: NextPage<SingleProjectQuery> = ({
  project,
}) => {


  return (
    <>
      <Head>
        <title>David Hanenko | Projects</title>
      </Head>
      <SingleProject project={project} />
    </>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const client = initializeApollo({});

  const {
    data: { project },
  } = await client.query({
    query: SingleProjectDocument,
    variables: {
      id: ctx.query.project,
    },
  });

  return addApolloState(client, {
    props: {
      project,
    },
  });
};

export default SingleProjectPage;
