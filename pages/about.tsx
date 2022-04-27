import { GetServerSidePropsContext, NextPage } from 'next';
import {
  useProjectsQuery,
  ProjectsQuery,
  ProjectsDocument,
} from '../generated';
import {
  addApolloState,
  initializeApollo,
} from '../graphql/apollo';
import GlobalStyles from '../components/layout/GlobalStyles';
import { Bg } from '../components/home/bg/Bg';

interface ProjectsDataProps {
  projects: ProjectsQuery;
}

const AboutPage: NextPage<ProjectsDataProps> = ({
  projects,
}) => {
  // const project = projects?.data[0].attributes;

  // const { data, loading, error } = useProjectsQuery();

  // if (loading) return <h4>Loading...</h4>;
  // if (error) return <p>Error: {error.message}</p>;

  return (
    <Bg/>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const client = initializeApollo({
    headers: ctx?.req?.headers,
  });

  const {
    data: { projects },
  } = await client.query<ProjectsQuery>({
    query: ProjectsDocument,
  });

  return addApolloState(client, {
    props: {
      projects,
    },
  });
};

export default AboutPage;
