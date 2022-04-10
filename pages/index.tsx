import { GetServerSideProps, NextPage } from 'next';
import { useProjectsQuery } from '../generated';
import GlobalStyles from '../styles/GlobalStyles';

const Home: NextPage = () => {
  const { data, error, loading } = useProjectsQuery();
  const project = data?.projects?.data[0].attributes;

  if (loading) return <h4>Loading...</h4>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <GlobalStyles>
      <h1>Projects</h1>
      <h3>{project?.title}</h3>
      <p>{project?.description}</p>
    </GlobalStyles>
  );
};

export default Home;
