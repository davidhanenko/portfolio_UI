import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import About from '../components/about/About';
import MediaFooter from '../components/media/media-footer/MediaFooter';

const AboutPage: NextPage = () => {
  // show navbar during current session
  useEffect(() => {
    sessionStorage.setItem('showNav', 'true');
  }, []);

  return (
    <>
      <Head>
        <title>David Hanenko | About</title>
      </Head>
      <About />
      <MediaFooter />
    </>
  );
};

export default AboutPage;
