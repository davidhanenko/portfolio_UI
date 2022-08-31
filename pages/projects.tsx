import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import MediaFooter from '../components/shared/media/media-footer/MediaFooter';
import Projects from '../components/projects/Projects';

const ProjectsPage: NextPage = () => {

  // show navbar during current session 
  useEffect(() => {
    sessionStorage.setItem('showNav', 'true');
  }, []);

  return (
    <>
      <Head>
        <title>David Hanenko | Projects</title>
      </Head>
      <Projects />
      <MediaFooter />
    </>
  );
};

export default ProjectsPage;
